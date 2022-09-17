import { MatDialogRef } from "@angular/material/dialog";
import { environment } from "projects/sistema/src/environments/environment";
import { IApplication } from "../../application/interface-application";
import { IResultPage } from "../../interface/result-page.interface";
import { MetaColumn } from "../../interfaces/metacolumn.interface";
import { UtilsService } from "../../service/utils.service";

export abstract class BaseComponent<Entity, Application extends IApplication<Entity>, Modal> {
    abstract listFields: string[];
    abstract metaColumns: MetaColumn[];

    quantityRecords: number;
    currentPage: number = 0;
    pageSize: number = environment.pageSize;

    private application: Application;
    protected dataSource: any[] = [];

    constructor(application: Application, protected utilsService: UtilsService, private context: any) {
        this.application = application;
        this.getRecordsByPage(0);
    }

    getRecordsByPage(page: number): void {
        this.application.page(page).subscribe({ next: this.fillDataSource.bind(this) });
        this.currentPage = page;
    }

    private fillDataSource(result: IResultPage<Entity>) {
        this.dataSource = result.records;
        this.quantityRecords = result.totalRecords;
    }

    protected delete(row: any) {
        console.log(row)
        this.utilsService
            .showConfirm('¿Esta seguro de eliminar el registro?')
            .subscribe((response: boolean) => {
                if (response) {
                    this.application.delete(row.id).subscribe(() => {
                        this.getRecordsByPage(this.currentPage);
                    })
                }
            })
    }

    protected showModalWindow(row: any = null) {

        const reference: MatDialogRef<Modal> = this.utilsService.showModalWindow(this.context, {
            disableClose: true,
            panelClass: "form-modal-medic",
            data: row
        });

        reference.afterClosed().subscribe((response: any) => {
            if (!response) {
                return;
            }
            console.log(response.record);
            if (response.id) {
                this.application.update(response.id, response.record).subscribe(() => {

                    this.getRecordsByPage(this.currentPage)
                });
            } else {
                this.application.insert(response.record).subscribe(() => {
                    this.getRecordsByPage(this.currentPage)
                })
            }
        })
    }
}