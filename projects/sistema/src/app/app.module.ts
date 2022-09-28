import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconService } from './shared/service/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/service/paginator.service';
import { LayoutModule } from './config/injections/layout/modules/layout.module';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';
import { UserApplication } from './user/application/user.application';
import { UserInfrastructure } from './user/infrastructure/user.infrastructure';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInfrastructure } from './core/infrastructure/auth.infrastructure';
import { AuthApplication } from './core/application/auth.application';
import { StorageApplication } from './core/application/storage.application';
import { StorageInfrastructure } from './core/infrastructure/storage.infrastructure';
import { MedicApplication } from './medic/application/medic.application';
import { MedicInfraestructure } from './medic/infrastructure/medic.infraestructure';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { DriverApplication } from './driver/application/driver.application';
import { DriverInfraestructure } from './driver/infrastructure/driver.infrastructure';
import { RoleApplication } from './roles/application/role.application';
import { RoleInfrastructure } from './roles/infrastructure/role.infrastructure';


const components = [AppComponent]
const imports = [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule, BrowserAnimationsModule, MatSidenavModule, MatIconModule, LayoutModule.forRoot(layoutConstant), ReactiveFormsModule]
const material = [{ provide: MatPaginatorIntl, useClass: Paginator }]
const applications = [UserApplication, AuthApplication, StorageApplication, MedicApplication, DriverApplication, RoleApplication]
const infrastructures = [UserInfrastructure, AuthInfrastructure, StorageInfrastructure, MedicInfraestructure, DriverInfraestructure, RoleInfrastructure]
const interceptors = [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]
@NgModule({
  declarations: [...components],
  imports: [...imports],
  bootstrap: [AppComponent],
  providers: [...material, ...applications, ...infrastructures, ...interceptors]
})
export class AppModule {
  constructor(private readonly iconService: IconService) { }
}
