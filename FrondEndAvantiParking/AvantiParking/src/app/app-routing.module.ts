import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadquarterComponent } from './components/administration/headquarter/headquarter.component';
import { ParkingLotComponent } from './components/administration/parking-lot/parking-lot.component';
import { SpaceComponent } from './components/administration/space/space.component';
import { ZoneComponent } from './components/administration/zone/zone.component';
const routes: Routes = [
  { path: 'administration/headquarter', component: HeadquarterComponent},
  { path: 'administration/parking-lot', component: ParkingLotComponent},
  { path: 'administration/space', component: SpaceComponent},
  { path: 'administration/zone', component: ZoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
