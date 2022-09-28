import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './views/components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './views/components/login/login.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../shared/service/utils.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


const components = [HeaderComponent, SidebarComponent, MenuComponent, PageLoginComponent, LoginComponent]
const imports = [CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  RouterModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatSnackBarModule]
const exports = [HeaderComponent, SidebarComponent, MenuComponent]
@NgModule({
  declarations: [...components],
  imports: [imports],
  exports: [exports],
  providers: [UtilsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
