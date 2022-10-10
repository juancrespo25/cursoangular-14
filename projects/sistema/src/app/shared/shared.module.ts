import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent, } from './components/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UtilsService } from './service/utils.service';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { WebcamModule } from 'ngx-webcam';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KeypadComponent } from './components/keypad/keypad.component';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    PhotoComponent,
    UploadDirective,
    KeypadComponent,
    RolesAllowedDirective,

  ],
  imports: [
    CommonModule, MatIconModule, MatCardModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatButtonModule, FlexLayoutModule, WebcamModule, MatSlideToggleModule, MatSnackBarModule
  ],
  exports: [TitleComponent, MatIconModule, MatButtonModule,
    ContainerComponent, TableComponent, MatFormFieldModule,
    MatInputModule, MatSidenavModule, PerfectScrollbarModule, PaginatorComponent, MatDialogModule,
    MatToolbarModule, FlexLayoutModule, MatTableModule, PhotoComponent, KeypadComponent, RolesAllowedDirective
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    UtilsService,
  ]
})
export class SharedModule { }
