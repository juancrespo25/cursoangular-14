import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageLoginComponent } from "./core/views/pages/page-login/page-login.component";
import { AuthenticationGuard } from "./shared/guards/authentication.guard";

const routes: Routes = [
    { path: '', component: PageLoginComponent },
    {
        path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule), canLoad: [AuthenticationGuard]
    },
    {
        path: 'driver', loadChildren: () => import('./driver/driver.module').then(module => module.DriverModule), canLoad: [AuthenticationGuard]
    },
    {
        path: 'medic', loadChildren: () => import('./medic/medic.module').then(module => module.MedicModule), canLoad: [AuthenticationGuard]
    },
    {
        path: 'history', loadChildren: () => import('./history/history.module').then(module => module.HistoryModule), canLoad: [AuthenticationGuard]
    },
    {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule), canLoad: [AuthenticationGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }