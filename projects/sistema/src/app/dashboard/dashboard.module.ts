import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidComponent } from './views/components/covid/covid.component';
import { CovidApplication } from './application/covid.application';
import { CovidInfastructure } from './infrastructure/covid.infrastructure';
import { SocketComponent } from './views/components/socket/socket.component';
import { SocketApplication } from './application/socket.application';
import { SocketInfrastructure } from './infrastructure/socket.infrastructure';


@NgModule({
  declarations: [
    DashboardComponent,
    CovidComponent,
    SocketComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule
  ],
  providers: [CovidApplication, CovidInfastructure, SocketApplication, SocketInfrastructure]
})
export class DashboardModule { }
