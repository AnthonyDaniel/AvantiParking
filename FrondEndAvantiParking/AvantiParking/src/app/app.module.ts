import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HeadquarterComponent } from './components/administration/headquarter/headquarter.component';
import { ParkingLotComponent } from './components/administration/parking-lot/parking-lot.component';
import { ZoneComponent } from './components/administration/zone/zone.component';
import { SpaceComponent } from './components/administration/space/space.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeadquarterPipePipe } from './pipes/headquarter-pipe.pipe';
import { ParkingLotPipePipe } from './pipes/parking-lot-pipe.pipe';
import { AdminPanelComponent } from './components/administration/admin-panel/admin-panel.component';
import { ZonePipePipe } from './pipes/zone-pipe.pipe';
import { SpacePipePipe } from './pipes/space-pipe.pipe';
import { UserPipePipe } from './pipes/user-pipe.pipe';
import { Oauth2Component } from './components/oauth2/oauth2/oauth2.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/administration/users/users.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehiclePipePipe } from './pipes/vehicle-pipe.pipe';
import { ReserveComponent } from './components/reserve/reserve.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadquarterComponent,
    ParkingLotComponent,
    ZoneComponent,
    SpaceComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    HeadquarterPipePipe,
    ParkingLotPipePipe,
    AdminPanelComponent,
    ZonePipePipe,
    SpacePipePipe,
    Oauth2Component,
    LoginComponent,
    UsersComponent,
    UserPipePipe,
    UserPanelComponent,
    VehicleComponent,
    VehiclePipePipe,
    ReserveComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


