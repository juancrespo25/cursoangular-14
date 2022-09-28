import { Component } from '@angular/core';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/service/utils.service';
import { UserApplication } from '../../../application/user.application';
import { User } from '../../../domain/user';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent extends BaseComponent<
  User,
  UserApplication,
  FormComponent
>  {

  listFields: Array<string> = [
    "id", "name", "lastname", "mcmp"
  ];

  metaColumns: MetaColumn[] = [
    { field: "id", title: "ID" },
    { field: "nombre", title: "Nombre" },
    { field: "correo", title: "Correo" }
  ];

  constructor(
    protected override readonly utilsService: UtilsService,
    protected readonly userApplication: UserApplication
  ) {
    super(userApplication, utilsService, FormComponent);
    this.fileName = "Users";
    this.sheetName = "List";
    this.titleReport = "Users";
  }

}
