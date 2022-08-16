import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';;
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconService } from './shared/service/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/service/paginator.service';
import { LayoutModule } from './config/injections/layout/modules/layout.module';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, CoreModule, BrowserAnimationsModule, MatSidenavModule, MatIconModule, LayoutModule.forRoot(layoutConstant)
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: Paginator }]
})
export class AppModule {
  constructor(private readonly iconService: IconService) { }
}
