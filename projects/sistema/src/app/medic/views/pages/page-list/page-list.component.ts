import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { MedicApplication } from '../../../application/medic.application';
import { Medic } from '../../../domain/medic';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})


export class PageListComponent extends BaseComponent<Medic, MedicApplication> {


  listFields: string[] = ["id", "nombre", "apellido", "cmp"];

  metaColumns: MetaColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre" },
    { field: "apellido", title: "Apellido" },
    { field: "cmp", title: "CMP" },
  ];

  constructor(medicApplication: MedicApplication) {
    super(medicApplication);
  }
}
