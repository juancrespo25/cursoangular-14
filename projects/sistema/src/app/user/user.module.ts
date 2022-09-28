import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfrastructure } from './infrastructure/user.infrastructure';
import { MatSelectModule } from '@angular/material/select';


const components = [PageListComponent, FormComponent]
const modules = [CommonModule, UserRoutingModule, SharedModule, ReactiveFormsModule, MatSelectModule]
const infrastructure = [UserInfrastructure]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [...infrastructure]

})
export class UserModule { }
