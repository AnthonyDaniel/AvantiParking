import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquarterComponent } from './components/administration/headquarter/headquarter.component';
import { ParkingLotComponent } from './components/administration/parking-lot/parking-lot.component';
import { SpaceComponent } from './components/administration/space/space.component';
import { ZoneComponent } from './components/administration/zone/zone.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', component: HeadquarterComponent},
  {path: 'parkinlot', component: ParkingLotComponent},
  {path: 'space', component: SpaceComponent},
  {path: 'zone',component: ZoneComponent},
  { path: 'administration/headquarter', component: HeadquarterComponent},
  { path: 'administration/parking-lot', component: ParkingLotComponent},
  { path: 'administration/space', component: SpaceComponent},
  { path: 'administration/zone', component: ZoneComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
