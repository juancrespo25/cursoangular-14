import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/service/utils.service';
import { DriverApplication } from '../../../application/driver.application';
import { Driver } from '../../../domain/driver';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent extends BaseComponent<Driver, DriverApplication, FormComponent> {

  listFields: string[] = ["id", "nombre", "apellido", "cmp"];

  metaColumns: MetaColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre" }
  ];

  constructor(
    protected driverApplication: DriverApplication,
    protected override readonly utilsService: UtilsService) {
    super(driverApplication, utilsService, FormComponent);
  }

}
