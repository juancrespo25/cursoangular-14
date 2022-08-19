import { Component, OnInit } from '@angular/core';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/service/utils.service';
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
    { field: "cmp", title: "C M P" },
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
    { id: 16, name: "Lincol", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 17, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 18, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 19, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 20, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 21, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 22, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 23, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 24, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 25, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 26, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 27, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 28, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 29, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 30, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 31, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 32, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 33, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 34, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 35, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 36, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 37, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 38, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 39, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 40, name: "Lucho Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 41, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 42, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
    { id: 43, name: "Juan Manuel", lastname: "Cespedes", mcmp: "333333", marked: false },
    { id: 44, name: "Aldo ", lastname: "Salas", mcmp: "322333", marked: false },
    { id: 45, name: "Carlos Enrique", lastname: "Mendoza", mcmp: "332343", marked: false },
  ]

  quantityRecords: number = this.dataOriginal.length;

  dataSource: any = [];
  pageSize = 9

  constructor(private readonly utilsService: UtilsService) {
    this.getRecordsByPage(0);
  }

  ngOnInit(): void {
  }

  getRecordsByPage(page: number) {
    this.dataSource = [
      ...this.dataOriginal.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }

  showModal() {
    this.utilsService.showModalWindow(FormComponent, { disableClose: true, panelClass: "form-modal" });
  }
}
