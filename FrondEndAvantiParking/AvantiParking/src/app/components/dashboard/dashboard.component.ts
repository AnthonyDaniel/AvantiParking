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
  public calendarModel;

 

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
    this.loadAvailableTimes(null,null);
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
  
  
  dataCalendar(){ //metodo que atrapa la fecha del dashboard para mostrarla por defecto en el formulario
    console.log(this.dashboardForm.reserveDate);
    console.log(this.dashboardForm.reserveDate.year +'-'+this.dashboardForm.reserveDate.month +'-' +this.dashboardForm.reserveDate.day);
    var monthWithoutCero: string= this.dashboardForm.reserveDate.month; // mes sin el 0(mes: 4,5,6)
    
    console.log('mes sin el 0: '+ monthWithoutCero)
    var monthWithCero: string  = '0'+this.dashboardForm.reserveDate.month // mes con el 0(mes: 04,05,06)
    console.log('algo '+ monthWithCero)
    console.log('exc luego de la igualacion de algo '+ monthWithoutCero)
    if (monthWithoutCero[0] != monthWithCero[1]  && this.dashboardForm.reserveDate.month <10) {
      this.dashboardForm.reserveDate.month = '0'+this.dashboardForm.reserveDate.month;
    }
    this.calendarModel = this.dashboardForm.reserveDate.year +'-'+this.dashboardForm.reserveDate.month +'-' +this.dashboardForm.reserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
    console.log(this.calendarModel);

    

  }

  loadAvailableTimes(zone,date){
      console.log("bienvenido");
    this._dashboard.listTimes(2,'2020-04-24').subscribe(
      data =>{
        console.log(data)
        console.log('Espacios por zona'+Object.keys(data).length)//para agarrar la cantidad de espacios que tienen espacios disponibles
        console.log(Object.keys(data))//estas son los Id de los espacios de la zona que recibe de parametro
        console.log(data[33])//para accdeder al elemento(espacio) 33. es el id del espacio no el nombre del espacio
        console.log(data[33].length)//para ver la cantidad de espacios disponibles del espacio con id 33
        console.log("Primer rango para el espacio id:33 Rango [Inicio:"+data[33][0][0][0]+" Fin:"+data[33][0][0][1]+"]")
        console.log("Segundo rango para el espacio id:33 Rango [Inicio:"+data[33][1][0][0]+" Fin:"+data[33][1][0][1]+"]")
        let keysArray = Object.keys(data)
        for(let space of keysArray){
          let ranges = data[space]
          console.log(ranges)
          for(let range of ranges){
            console.log("Rangos para espacio "+space+" Rango"+range+" [Inicio:"+range[0][0]+" Fin:"+range[0][1]+"]");           
          }          
        }        
      },
      error=>{
        console.log(error);
      });  
  }

  loadAvailableTimesV2(){
    let zone = this.zoneModel.id_zone;
    if( zone != null && this.calendarModel != null){
      console.log('***********');
      console.log('fecha seleccionada: '+this.calendarModel);
      console.log('numero de zona '+zone);
      console.log("bienvenido");
      this._dashboard.listTimes(zone,this.calendarModel).subscribe(
        data =>{
          console.log(data)
          console.log('Espacios por zona '+Object.keys(data).length)//para agarrar la cantidad de espacios que tienen espacios disponibles
          console.log(Object.keys(data))//estas son los Id de los espacios de la zona que recibe de parametro
          console.log('rangos '+data[5])//para accdeder al elemento(espacio) 33. es el id del espacio no el nombre del espacio
          console.log(data[5].length)//para ver la cantidad de espacios disponibles del espacio con id 33
          console.log("-----Primer rango para el espacio id: 5 Rango [Inicio: "+data[5][0][0][0]+" Fin: "+data[5][0][0][1]+"]")
          console.log("Segundo rango para el espacio id:5 Rango [Inicio:"+data[5][1][0][0]+" Fin:"+data[5][1][0][1]+"]")
  
          let keysArray = Object.keys(data) // todos los id del espacio
          for(let space of keysArray){ 
            let ranges = data[space] //contenedor de rangos
            console.log(ranges)
            for(let range of ranges){
              console.log("Rangos para espacio "+space+" Rango "+range+" [Inicio: "+range[0][0]+" Fin: "+range[0][1]+"]");           
            }          
          }        
        },
        error=>{
          console.log(error);
        }); 
    } 
   
     
  }


  
}
