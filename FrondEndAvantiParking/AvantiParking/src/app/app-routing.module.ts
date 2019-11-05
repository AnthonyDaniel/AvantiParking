import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/administration/principal/principal.component';
import { HeadquarterComponent } from './components/administration/headquarter/headquarter.component';
import { ParkingLotComponent } from './components/administration/parking-lot/parking-lot.component';
import { SpaceComponent } from './components/administration/space/space.component';
import { ZoneComponent } from './components/administration/zone/zone.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { Oauth2Component } from './components/oauth2/oauth2/oauth2.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent,canActivate: [BeforeLoginService]},
  { path: 'administration/principal', component: PrincipalComponent,canActivate: [AfterLoginService]},
  { path: 'administration/headquarter', component: HeadquarterComponent,canActivate: [AfterLoginService]},
  { path: 'administration/parking-lot', component: ParkingLotComponent,canActivate: [AfterLoginService]},
  { path: 'administration/space', component: SpaceComponent,canActivate: [AfterLoginService]},
  { path: 'administration/zone', component: ZoneComponent,canActivate: [AfterLoginService]},
  { path: 'oauth2/redirect', component: Oauth2Component,canActivate: [AfterLoginService]},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
