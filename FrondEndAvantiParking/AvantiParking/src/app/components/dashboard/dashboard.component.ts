import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import {NgbModule, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { $ } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})

export class DashboardComponent implements OnInit {

  public parkings
  public zones
  private img;
  public headquarters;
  private u: any;
  private current:any;
  private userInf = {
    name: null,
    imageUrl: null,
    headquarter: ''
  };
  private formReserve = {
    parking: null,
    zone: null
  }
  public dashboardForm={
    reserveDate: { year: 2019, month: 11, day: 1   }
  }

  public error: String;
  public success: String;
  public status: String;
  minDate = undefined;
  maxDate = undefined;

  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService,public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService, private config: NgbDatepickerConfig) { 

      const current = new Date();
    

      config.minDate={ year: current.getFullYear(), month: current.getMonth()+1,
        day: current.getDate(),
      }
      
      config.maxDate = { year: current.getFullYear(), month: 12, day: 31 }
      
    }

  ngOnInit() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
    });
    this.ListHeadquarters();
    this.ListParkings();
    this.ListZones();
  }

  ListParkings() {
    this._parking.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }

  ListHeadquarters(){
    this._headquarter.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
      }
    );
  }

  ListZones() {
    this._zone.listZone().subscribe(
      data => {
        this.zones = data;
      },
      error => console.log(error)
    )
  }

  loadUser(data) {
    this.userInf = data;
    this.u = data;
    this.img = data.imageUrl;
    if (data.headquarter == null) {
      this.userInf.headquarter = '';
    } else {
      this.userInf.headquarter = data.headquarter;
      this.current = data.headquarter.name;
    }
  }

  headquarterUser(data) {
    this.userInf.headquarter = data.name;
  }

  dashboardData(){

  }

  
  responseSuccess(data) {
    this.success = data.data;
    this.status = "success";
  }
  responseError(error) {
    this.error = error.error.error;
    this.status = "error";
  }
  
}
