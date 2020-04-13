import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquarterComponent } from './components/administration/headquarter/headquarter.component';
import { ParkingLotComponent } from './components/administration/parking-lot/parking-lot.component';
import { SpaceComponent } from './components/administration/space/space.component';
import { ZoneComponent } from './components/administration/zone/zone.component';
import { UsersComponent } from './components/administration/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { ErrorComponent } from './components/error/error.component';
import { Oauth2Component } from './components/oauth2/oauth2/oauth2.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { AdminAfterService } from './services/admin-after.service';
import { ReportComponent } from './components/administration/report/report.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'administration/headquarter', component: HeadquarterComponent,canActivate: [AdminAfterService]},
  { path: 'administration/parking-lot', component: ParkingLotComponent,canActivate: [AdminAfterService]},
  { path: 'administration/user', component: UsersComponent,canActivate: [AdminAfterService]},
  { path: 'administration/space', component: SpaceComponent,canActivate: [AdminAfterService]},
  { path: 'administration/zone', component: ZoneComponent,canActivate: [AdminAfterService]},
  { path: 'administration/report', component: ReportComponent,canActivate: [AdminAfterService]},
  { path: 'vehicle', component: VehicleComponent,canActivate: [AfterLoginService]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AfterLoginService]},
  { path: 'reserves', component: ReservesComponent,canActivate: [AfterLoginService]},
  { path: 'oauth2/redirect', component: Oauth2Component,canActivate: [BeforeLoginService]},
  { path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
