import { Component } from '@angular/core';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { MedicApplication } from '../../../application/medic.application';
import { Medic } from '../../../domain/medic';
import { FormComponent } from '../../components/form/form.component';
import { UtilsService } from 'projects/sistema/src/app/shared/service/utils.service';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})


export class PageListComponent extends BaseComponent<Medic, MedicApplication, FormComponent> {
  listFields: string[] = ["id", "nombre", "apellido", "cmp"];

  metaColumns: MetaColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre" },
    { field: "apellido", title: "Apellido" },
    { field: "cmp", title: "CMP" },
  ];

  constructor(protected medicApplication: MedicApplication, protected override readonly utilsService: UtilsService) {
    super(medicApplication, utilsService, FormComponent);
  }
}
