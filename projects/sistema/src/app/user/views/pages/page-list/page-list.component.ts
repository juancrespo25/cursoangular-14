import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/service/utils.service';
import { UserApplication } from '../../../application/user.application';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  listFields: Array<string> = [
    "id", "name", "lastname", "mcmp"
  ];

  metaColumns: MetaColumn[] = [
    { field: "id", title: "ID" },
    { field: "name", title: "Nombre" },
    { field: "lastname", title: "Apellido" },
    { field: "mcmp", title: "C M P" },
  ];

  dataOriginal = [
    { id: 1, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 2, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 3, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 4, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 5, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 6, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 7, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 8, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 9, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 10, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 11, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 12, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 13, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 14, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 15, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 16, name: "Lincol", lastname: "Cespedes", mcmp: "333333", marked: false }
  ]

  quantityRecords: number = this.dataOriginal.length;

  dataSource: any = [];
  pageSize = 9
  currentPage = 0;

  constructor(private readonly utilsService: UtilsService,
    private readonly userApplication: UserApplication) {
    this.getRecordsByPage(0);
  }

  ngOnInit(): void {
  }

  getRecordsByPage(page: number) {

    const data = this.userApplication.page

    this.currentPage = page
    this.dataSource = [
      ...this.dataOriginal.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }

  showModalWindow(row: any = null) {


    const reference: MatDialogRef<FormComponent> =
      this.utilsService.showModalWindow(FormComponent, {
        disableClose: true,
        panelClass: 'form-modal',
        data: row,
      });


    reference.afterClosed().subscribe((response: any) => {

      if (!response) {
        return;
      }


      if (response.id) {
        const record: any = this.dataOriginal.find(
          (data) => data.id === response.id
        );
        record.name = response.name;
        record.lastname = response.lastname;
      } else {
        response.id = this.dataOriginal.length + 1;
        this.dataOriginal.push(response);
      }
      this.getRecordsByPage(this.currentPage);
    });
  }

  delete(row: any) {

    this.utilsService.showConfirm("Really? Do you want to delete it?").subscribe(response => {
      if (response) {
        const index = this.dataOriginal.findIndex(r => r.id = row.id);
        this.dataOriginal.splice(index, 1)
        this.getRecordsByPage(this.currentPage);
      }
    })
  }

}
