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
import * as moment from 'moment';
import { ServiceSpaceService } from 'src/app/services/service-space.service';

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
  public spaces:any;
  private u: any;
  private current:any;
  public vehicles;
  public dashboards: any = [];
  
  public formAddReserve = {
    vehicle: null,
    startTime:null,
    endTime:null,
    space:null
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
  public dashboardForm={
    reserveDate: null
  }
  public spaceModel = { 
    id_space: null,
    name: null,
    type: null,
    user: null,
    state: null,
    zone: null
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

  public spacesContainer:any=[];

  public error: String;
  public success: String;
  public status: String;
  minDate = undefined;
  maxDate = undefined;

  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService,public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService, private config: NgbDatepickerConfig, public _vehicle: VehicleServiceService,
    public datepipe: DatePipe, public _dashboard: DashboardServiceService,public space: ServiceSpaceService
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
    
    
  }
  listSpaces(){
 
    this.space.listSpaces(this.zoneModel.id_zone).subscribe(
      data=>{
        this.spaces = data;
       
        console.log(data)
      },
      error=>{
        console.log(error);
      }
    );
    
    /*this.space.listSpaces(this.zoneModel.id_zone).subscribe(
      data=>{
     
       let spaces=Object.keys(data)
        console.log(data)
      
        for(let space of spaces){
       
          let espacio = {
            id: null,
            name: null,
            type: null,
            user: null,
            state: null,
            zone: null
           
          }
          espacio.name = space;
        
          this.spacesContainer.push(espacio);  
      }
    },
      error=>{
        console.log(error);
      }
    );*/
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
  dataSpace(space){
    this.spaceModel=space;
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
    }else if(object == this.parkingLotModel){
    }else if(object == this.zoneModel){
    }

  }
  
  dataCalendar(){ //metodo que atrapa la fecha del dashboard para mostrarla por defecto en el formulario
    console.log(this.dashboardForm.reserveDate);
    console.log(this.dashboardForm.reserveDate.year +'-'+this.dashboardForm.reserveDate.month +'-' +this.dashboardForm.reserveDate.day);
    var monthWithoutCero: string= this.dashboardForm.reserveDate.month; // mes sin el 0(mes: 4,5,6)
    var monthWithCero: string  = '0'+this.dashboardForm.reserveDate.month // mes con el 0(mes: 04,05,06)
    if (monthWithoutCero[0] != monthWithCero[1]  && this.dashboardForm.reserveDate.month <10) {
      this.dashboardForm.reserveDate.month = '0'+this.dashboardForm.reserveDate.month;
    }
    this.calendarModel = this.dashboardForm.reserveDate.year +'-'+this.dashboardForm.reserveDate.month +'-' +this.dashboardForm.reserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
   

  }

  loadAvailableTimes(){
    let zone = this.zoneModel.id_zone;
  
    this._dashboard.listTimes(zone,this.calendarModel).subscribe(
      data =>{
        console.log(data)
        /*console.log('Espacios por zona'+Object.keys(data).length)//para agarrar la cantidad de espacios que tienen espacios disponibles
        console.log(Object.keys(data))//estas son los Id de los espacios de la zona que recibe de parametro
        console.log(data[33])//para accdeder al elemento(espacio) 33. es el id del espacio no el nombre del espacio
        console.log(data[33].length)//para ver la cantidad de espacios disponibles del espacio con id 33
        console.log("Primer rango para el espacio id:33 Rango [Inicio:"+data[33][0][0][0]+" Fin:"+data[33][0][0][1]+"]")
        console.log("Segundo rango para el espacio id:33 Rango [Inicio:"+data[33][1][0][0]+" Fin:"+data[33][1][0][1]+"]")*/
        let keysArray = Object.keys(data)
        //this.dashboards = keysArray;
        //this.rangeSContainer = [];
        for(let space of keysArray){
          let contenedor:any =[];
          let espacio = {
            id: null,
            name: null,
            zone: null,
            range: null,
          }
          espacio.id = space;
          
          let ranges = data[space]
          
          //console.log(space)          
          //this.dashboardSpace.id = space;          
          for(let range of ranges){ 
            let  rangeS = {
              begin:null,
              end:null
            };
           // console.log("----Rangos para espacio "+space+" Rango"+range+" [Inicio:"+rangeS.begin+" Fin:"+rangeS.end+"]");          
            rangeS.begin =  range[0][0];
            rangeS.end =  range[0][1];
            //console.log("Rangos para espacio "+space+" Rango"+range+" [Inicio:"+rangeS.begin+" Fin:"+rangeS.end+"]");
            //this.rangeSContainer.push(rangeS);
            contenedor.push(range);
            //console.log("asii"+this.rangeSContainer[0].begin+" asi no "+this.rangeSContainer[0].end);
          }
          /*for(let cc of this.rangeSContainer){
          console.log("dddSpace:"+this.dashboardSpace.id+"-"+cc.begin+"-"+cc.end)
          } */
          //this.dashboardSpace.range = this.rangeSContainer;
          //console.log("Space:"+this.dashboardSpace.id+"Rango"+this.dashboardSpace.range[0].begin+"-"+this.dashboardSpace.range[0].end)
          //this.spacesContainer.push(this.dashboardSpace); 
          espacio.range = contenedor;  
          this.spacesContainer.push(espacio);  
        }  
        for(let cc of this.spacesContainer){
          console.log(cc)
          console.log(this.spaceModel.id_space)
        }      
      },
      error=>{
        console.log(error);
      });  

  }
  

  /*loadAvailableTimesV2(){
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
          this.dashboards = keysArray;
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
   
     
  }*/


  addReserve(){
    console.log(this.spaceModel.id_space)

    var i ={
      date:this.dashboardForm.reserveDate.year+"-"+this.dashboardForm.reserveDate.month+"-"+this.dashboardForm.reserveDate.day,
      start_time:"6:00",
      end_time:"12:00",
      space:this.spaceModel.id_space,
      user:this.userInf.id,
      vehicle:this.formAddReserve.vehicle
    }
    this._dashboard.createReserve(i).subscribe(
      data=>{
       
      },
      error=>{
        console.log(error);
      }
    );
    console.log(i);
  }

  

}
