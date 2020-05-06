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
import { NgbModule, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import 'moment-recur-ts';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe],//necesario para conversion de date a string

})

export class DashboardComponent implements OnInit {

  public parkings
  public zones
  private img;
  public headquarters;
  public spaces: any;
  private u: any;
  private current: any;
  public vehicles;
  public dashboards: any = [];


  public formAddReserve = {
    id_reservation: null,
    created_at: null,
    user: { id: null },
    vehicle: { increment: null }
  }

  public formAddDetail = {
    id_reserve_detail: null,
    date: null,
    start_time: null,
    end_time: null,
    reserve_state: null,
    end_date_extend: null,
    space: null,
    reserve: this.formAddReserve
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
  public dashboardForm = {
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

  public spacesContainer: any = [];

  public spaceRange: any = [];
  public selectableRange: any = [];
  public start_time;
  public end_time

  public displayRangeModel = {
    begin: null,
    options: []
  }

  public error: String;
  public success: String;
  public status: String;
  minDate: NgbDateStruct;
  maxDate:NgbDateStruct;
  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService, public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService, private config: NgbDatepickerConfig, public _vehicle: VehicleServiceService,
    public datepipe: DatePipe, public _dashboard: DashboardServiceService, public space: ServiceSpaceService
  ) {

    const now = new Date();
    const since = moment().add(30, 'd').toDate();
    const since2 = moment().add(2,'d').recur().every(7).days();
    let since3 = moment().recur().every(7).days();
since3.matches()
console.log(since3)
    config.minDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }

    config.maxDate = { year: since.getFullYear(), month: since.getMonth() + 1, day: since.getDate() }

    this.minDate={ year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
    
    this.maxDate = { year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate()  }
    console.log(this.dashboardForm.reserveDate)
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

  listSpaces() {

    this.space.listSpaces(this.zoneModel.id_zone).subscribe(
      data => {
        this.spaces = data;
      },
      error => {
        console.log(error);
      }
    );

  }

  ListParkings() {
    this._parking.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }

  ListHeadquarters() {
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
  dataSpace(space) {
    this.end_time = null;
    this.start_time = null;
    this.spaceRange = [];
    this.spaceModel.id_space = space.id_space;
    this.spaceModel.name = space.name;
    this.spaceModel.type = space.type;
    this.spaceModel.user = space.user;
    this.spaceModel.state = space.state;
    this.spaceModel.zone = space.zone;
    for (let range of space.range) {
      for (var i = range[0][0]; i < range[0][1]; i++) {
        let displayRange = {
          begin: null,
          options: []
        }
        displayRange.begin = i;
        for (var j = i + 1; j <= range[0][1]; j++) {
          displayRange.options.push(j);
        }
        this.spaceRange.push(displayRange);
      }
    }
    this.formAddDetail.space = this.spaceModel;
  }
  setStartTime(spaceRange) {
    this.formAddDetail.start_time = spaceRange.begin + ":00:00";
    this.selectableRange = spaceRange.options;
    console.log(this.selectableRange);
  }
  setEndTime(endTime) {
    this.formAddDetail.end_time = endTime + ":00:00";
    console.log(this.formAddDetail);
  }
  responseSuccess(data) {
    this.success = data.data;
    this.status = "success";
  }
  responseError(error) {
    this.error = error.error.error;
    this.status = "error";
  }

  dataReserve(object, value) { // object es igual a todo el modelo de datos para parqueo/zona/sede y value es el valaor del combo box
    if (object == this.hqModel) {
    } else if (object == this.parkingLotModel) {
    } else if (object == this.zoneModel) {
    }

  }
  dataCalendar() { //metodo que atrapa la fecha del dashboard para mostrarla por defecto en el formulario
    console.log(this.dashboardForm.reserveDate);
    if (this.dashboardForm.reserveDate != null) {
      var monthWithoutCero: string = this.dashboardForm.reserveDate.month; // mes sin el 0(mes: 4,5,6)
      var monthWithCero: string = '0' + this.dashboardForm.reserveDate.month // mes con el 0(mes: 04,05,06)
      if (monthWithoutCero[0] != monthWithCero[1] && this.dashboardForm.reserveDate.month < 10) {
        this.dashboardForm.reserveDate.month = '0' + this.dashboardForm.reserveDate.month;
      }
      this.calendarModel = this.dashboardForm.reserveDate.year + '-' + this.dashboardForm.reserveDate.month + '-' + this.dashboardForm.reserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
    }



  }

  loadAvailableTimes() {
    let zone = this.zoneModel.id_zone;
    if (zone != null && this.calendarModel != null) {
      this._dashboard.listTimes(zone, this.calendarModel).subscribe(
        data => {
          this.spacesContainer = [];
          let keysArray = Object.keys(data);
          for (let space of keysArray) {
            let tempSpace = this.spaces.find(element => element.id_space == space);
            let contenedor: any = [];
            let espacio = {
              id_space: null,
              name: tempSpace.name,
              state: tempSpace.state,
              type: tempSpace.type,
              user: tempSpace.user,
              zone: tempSpace.zone,
              range: null,
            }
            espacio.id_space = space;
            let ranges = data[space]
            for (let range of ranges) {
              let rangeS = {
                begin: null,
                end: null
              };
              rangeS.begin = range[0][0];
              rangeS.end = range[0][1];
              contenedor.push(range);
            }
            espacio.range = contenedor;
            this.spacesContainer.push(espacio);
          }
          /*for(let cc of this.spacesContainer){
            console.log(cc)
            //console.log(this.spaceModel.id_space)
          }  */
        },
        error => {
          console.log(error);
        });
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'No reservation will be shown until you filter the fields to show',
        confirmButtonColor: '#EF4023'
      })
    }

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


  addReserve() {
    if (this.formAddDetail.start_time == null || this.formAddDetail.end_time == null) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Start time and end time are required!',
        confirmButtonColor: '#EF4023'
      })
    } else {
      let date = new Date();
      console.log("aqui", date.getMonth())
      let month;
      month = date.getMonth() + 1;//agarra un mes menos? 
      let formattedDate;
      if (month < 10) {

        formattedDate = date.getFullYear() + "-0" + month + "-" + date.getDate();
      } else {
        formattedDate = date.getFullYear() + "-" + month + "-" + date.getDate();
      }
      console.log(date, formattedDate);
      this.formAddDetail.date = this.calendarModel;
      this.formAddDetail.reserve_state = 0;
      this.formAddReserve.user.id = this.userInf.id;
      this.formAddReserve.created_at = formattedDate;
      console.log("Data of reserve", this.formAddReserve)
      console.log("Data of detail", this.formAddDetail)
      this._dashboard.createReserve(this.formAddReserve.created_at, this.formAddReserve.user.id,
        this.formAddReserve.vehicle.increment, this.formAddDetail).subscribe(
          data => {
            $("#closeReserveModal").click();
            Swal.fire({
              type: 'success',
              title: 'Your reservation has been saved!',
              showConfirmButton: false,
              timer: 1500
            })
            this.ngOnInit();
            this.loadAvailableTimes();
            console.log("response", data);
          },
          error => {
            console.log(error);
          }
        );
    }
    /*if ( this.dashboardForm.reserveDate.year+"-"+this.dashboardForm.reserveDate.month+"-"+this.dashboardForm.reserveDate.day != null &&
    this.formAddDetail.startTime != null && this.formAddDetail.endTime != null &&
    this.formAddDetail.space != null && this.userInf.id != null && this.formAddDetail.vehicle !=  null
    ) {
      var i ={
        date:this.dashboardForm.reserveDate.year+"-"+this.dashboardForm.reserveDate.month+"-"+this.dashboardForm.reserveDate.day,
        start_time: this.formAddReserve.startTime,
        end_time:this.formAddReserve.endTime,
        space:this.formAddReserve.space,
        user:this.userInf.id,
        vehicle:this.formAddReserve.vehicle
      }
      
      this._dashboard.createReserve(i).subscribe(
        data=>{
          Swal.fire({
            type: 'success',
            title: 'The reserve has been saved',
            showConfirmButton: false,
            timer: 1500
          })
         //de momento como no entra a dato los formularios no se vacian
          this.formAddReserve.startTime =  null;
          this.formAddReserve.endTime = null;
          this.formAddReserve.space = null;
          this.formAddReserve.vehicle = null;
        },
        error=>{
          console.log(error);
          
        }
      );
      console.log(i);
    }else{
      console.log("faltan parametros por llenar")
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'The space, start time, end time and vehicle fields are required',
        confirmButtonColor: '#EF4023'
      })
    }*/
  }



}
