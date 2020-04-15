import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import {NgbModule, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { $ } from 'protractor';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]//necesario para conversion de date a string
  
})

export class DashboardComponent implements OnInit {

  public parkings
  public zones
  private img;
  public headquarters;
  private u: any;
  private current:any;
  public vehicles;


  public formAddReserve = {
    vehicle: null
  }
  public userInf = {
    id: null,
    name: null,
    imageUrl: null,
    headquarter: ''
  };
  private formReserve = {
    parking_lot_id: null,
    parking: null,
    zone: null
  }
  // public formOpenReserve = {
  //   parking: null,
  // }
  public dashboardForm={
    reserveDate: null
  }

  public hqModel = { //copia de un modelo de headquarters
    id_headquarter: null,
    name: null,
    country: null,
    city: null,
  }

  public parkingLotModel = { //copia de un modelo de parking
    id_parking_lot: null,
    name: null,
    headquarter: this.hqModel,
  }

  public zoneModel = { // copia de un modelo de zonas
    id_zone: null,
    name: null,
    parking_lot: this.parkingLotModel,
    quantity: null,
    start: null,
  }
  public calendarModel = {
    date: null
  }
 

  public error: String;
  public success: String;
  public status: String;
  minDate = undefined;
  maxDate = undefined;

  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService,public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService, private config: NgbDatepickerConfig, public _vehicle: VehicleServiceService,
    public datepipe: DatePipe, public _dashboard: DashboardServiceService
    ) { 

      const now = new Date();
      const since = moment().add(30,'d').toDate();
    
      config.minDate={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
      
      config.maxDate = { year: since.getFullYear(), month: since.getMonth() + 1, day: since.getDate()}

    
      
    }
    

  ngOnInit() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listVehicles();
    });
    this.ListHeadquarters();
    this.ListParkings();
    this.ListZones();
    this.loadAvailableTimes();
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
  listVehicles() {
    this._vehicle.listVehicle(this.userInf.id).subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadUser(data) {
    this.userInf = data;
    this.userInf.id = data.id;
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

  dataReserve(object,value) { // object es igual a todo el modelo de datos para parqueo/zona/sede y value es el valaor del combo box
    if(object == this.hqModel){
      console.log("hq",object);
    }else if(object == this.parkingLotModel){
      console.log("parking lot",object);
    }else if(object == this.zoneModel){
      console.log("zone",object);
    }

  }
  
  
  dataCalendar(data){ //metodo que atrapa la fecha del dashboard para mostrarla por defecto en el formulario
    console.log(this.dashboardForm.reserveDate);
    console.log(data);
    var date =new Date(); // variable usada para transformar
    this.calendarModel.date = this.dashboardForm.reserveDate; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
    this.calendarModel.date = this.datepipe.transform(date, 'yyyy-MM-dd' );// transformamos el modelo de date a string
    
  }

  loadAvailableTimes(){
    console.log("bienvenido");
    this._dashboard.listTimes(2,'2020-04-24').subscribe(
      data =>{
        console.log(data);
      },
      error=>{

      });  
  }

  
}
