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
import { PrincipalComponent } from './components/administration/principal/principal.component';
import { HeadquarterPipePipe } from './pipes/headquarter-pipe.pipe';
import { ParkingLotPipePipe } from './pipes/parking-lot-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeadquarterComponent,
    ParkingLotComponent,
    ZoneComponent,
    SpaceComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    ErrorComponent,
    HeadquarterPipePipe,
    ParkingLotPipePipe,
 
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


