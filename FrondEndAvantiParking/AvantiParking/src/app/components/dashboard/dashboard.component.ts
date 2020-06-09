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
import { NgbModule, NgbDatepickerConfig, NgbDateStruct, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import 'moment-recur-ts';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import * as $ from 'jquery';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe],//necesario para conversion de date a string

})

export class DashboardComponent implements OnInit {

  public parkings :any;
  public zones:any;
  private img;
  public headquarters = [];
  public spaces: any;
  private u: any;
  //private current: any;
  public vehicles;
  public dashboards: any = [];
  public userNotifications;

  public loadding = false;

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
 
  private formReserve = {
    parking_lot_id: null,
    parking: null,
    zone: null
  }
  public dashboardForm = {
    reserveDate: null
  }
  public extendReserveForm = {
    extendReserveDate: null
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

  public userInf = {
    id: null,
    name: null,
    imageUrl: null,
    headquarter: this.hqModel
  };

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
  public calendarModelExtend;
  
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
  minDate2 =  null;
  maxDate2 = null;
  minDate : NgbDateStruct;
  maxDate : NgbDateStruct;
  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService, public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService, private config: NgbDatepickerConfig, public _vehicle: VehicleServiceService,
    public datepipe: DatePipe, public _dashboard: DashboardServiceService, public space: ServiceSpaceService,
    public emails: NotificationsService, public calendarService:NgbCalendar
  ) {

  }

  ngOnInit() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listVehicles();
    });
    this.dashboardCalendarDates();
  }
  dashboardCalendarDates(){
    const now = new Date();
    const since = moment().add(30, 'd').toDate();

    this.minDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
    console.log(this.minDate)

    this.maxDate = { year: since.getFullYear(), month: since.getMonth() + 1, day: since.getDate() }
  }

  isDisabled;
  arrayAux:any;
  calendarDates(){
      
    const since2 = moment().add(2,'d').recur().every(7).days();
   
    let fecha = this.dashboardForm.reserveDate.month + '/' + this.dashboardForm.reserveDate.day + '/' + this.dashboardForm.reserveDate.year;


    const since = moment().add(30, 'day').toDate();
    
    const now = moment().toDate();
    let number = this.dashboardForm.reserveDate.day;

    let selectedDate = new NgbDate(this.arrayAux[0],this.arrayAux[1],this.arrayAux[2]);
    //console.log('since',selectedDate);
    let startDate = moment().year(selectedDate.year).month(selectedDate.month-1).date(selectedDate.day).add(7,'day').toDate();
    let endDate = moment().year(selectedDate.year).month(selectedDate.month-1).date(selectedDate.day).add(4,'week').toDate();
    //console.log('end',endDate);
    this.minDate2 = { year: startDate.getFullYear(), month: startDate.getMonth()+1, day: startDate.getDate()}
    //console.log('min',this.minDate2);
    this.maxDate2 = { year: endDate.getFullYear(), month: endDate.getMonth()+1, day: endDate.getDate()}
    //console.log('max',this.maxDate2);
    //let selectedDate = new NgbDate(this.arrayAux[0],this.arrayAux[1],this.arrayAux[2]);
    this.isDisabled = (date: NgbDate, current: {month: number}) =>       
      this.calendarService.getWeekday(selectedDate) != this.calendarService.getWeekday(date);
  }

  listSpaces() {
    this.space.listSpaces(this.zoneModel.id_zone).subscribe(
     data => {
        this.spaces = data;
     },
     error => {
     }
      );
  }

  listHeadquarters() {
    this.headquarters = [];
    this._headquarter.listHeadquarter().subscribe(
      data => {
        let hqs:any = data ;
        if(this.userInf.headquarter!= null){          
          this.headquarters.push(this.userInf.headquarter); 
          for(let hq of hqs){
            if(hq.id_headquarter != this.userInf.headquarter.id_headquarter){
              this.headquarters.push(hq)
            }
          }  
        }else{
          this.headquarters = hqs;
        }  
        this.hqModel = this.headquarters[0];  
        this.listParkings(this.hqModel);    
       
      },
      error =>{

      }
    );
  }

  listParkings(headquarter) {
    this._parking.listParkingLotHQ(headquarter.id_headquarter).subscribe(
      data => {
        console.log(data);
        this.parkings = data;
        this.parkingLotModel = this.parkings[0];
        this.listZones(this.parkingLotModel);
      },
      error => {

      }
    )
  }

  listZones(parking_lot) {
    this._zone.listZoneByPKLot(parking_lot.id_parking_lot).subscribe(
      data => {

        this.zones = data;
        this.zoneModel = this.zones[0];
      },
      error =>{

      }
    )
  }

  listVehicles() {
    this._vehicle.listVehicle(this.userInf.id).subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
      }
    );
  }

  loadUser(data) {
    this.userInf = data;
    this.userNotifications = data;
    this.userInf.id = data.id;
    this.u = data;
    this.img = data.imageUrl;
    if (data.headquarter == null) {
      this.userInf.headquarter = null;
    } else {
      this.userInf.headquarter = data.headquarter;

    }
    this.listHeadquarters();
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
 
    if(spaceRange.begin < 10){      
      this.formAddDetail.start_time = "0"+spaceRange.begin + ":00:00";
    }else{      
      this.formAddDetail.start_time = spaceRange.begin + ":00:00";
    }
    this.selectableRange = spaceRange.options;
  }
  setEndTime(endTime) {
    if(endTime < 10){      
      this.formAddDetail.end_time = "0"+endTime + ":00:00";
    }else{      
      this.formAddDetail.end_time = endTime + ":00:00";
    }
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

    if (this.dashboardForm.reserveDate != null) {      
      this.arrayAux = [this.dashboardForm.reserveDate.year ,parseInt(this.dashboardForm.reserveDate.month) ,this.dashboardForm.reserveDate.day]  //fecha inicial para calcular extendida
      var monthWithoutCero: string = this.dashboardForm.reserveDate.month; // mes sin el 0(mes: 4,5,6)
      var monthWithCero: string = '0' + this.dashboardForm.reserveDate.month // mes con el 0(mes: 04,05,06)
      var dayWithoutCero: string = this.dashboardForm.reserveDate.day; // mes sin el 0(mes: 4,5,6)
      var dayWithCero: string = '0' + this.dashboardForm.reserveDate.day // mes con el 0(mes: 04,05,06)
      this.calendarModel = this.dashboardForm.reserveDate.year + '-';
      if (monthWithoutCero[0] != monthWithCero[1] && this.dashboardForm.reserveDate.month < 10) {
      
        this.calendarModel = this.calendarModel + '0' + this.dashboardForm.reserveDate.month+ '-';
      }else{
        this.calendarModel = this.calendarModel + this.dashboardForm.reserveDate.month+'-';
      }
      if (dayWithoutCero[0] != dayWithCero[1] && this.dashboardForm.reserveDate.day < 10) {
        
        this.calendarModel = this.calendarModel + '0' + this.dashboardForm.reserveDate.day;
      }else{
        this.calendarModel = this.calendarModel + this.dashboardForm.reserveDate.day;
      }
     
    }
    this.calendarDates(); //limitar calendario de extendida
  }
  dataCalendarExtend() { //metodo que atrapa la fecha del dashboard para mostrarla por defecto en el formulario

    if (this.extendReserveForm.extendReserveDate != null) {
     
      var monthWithoutCero: string = this.extendReserveForm.extendReserveDate.month; // mes sin el 0(mes: 4,5,6)
      var monthWithCero: string = '0' + this.extendReserveForm.extendReserveDate.month // mes con el 0(mes: 04,05,06)
      var dayWithoutCero: string = this.extendReserveForm.extendReserveDate.day; // mes sin el 0(mes: 4,5,6)
      var dayWithCero: string = '0' + this.extendReserveForm.extendReserveDate.day // mes con el 0(mes: 04,05,06)
      if (monthWithoutCero[0] != monthWithCero[1] && this.extendReserveForm.extendReserveDate.month < 10) {
        this.extendReserveForm.extendReserveDate.month = '0' + this.extendReserveForm.extendReserveDate.month;
      }
      if (dayWithoutCero[0] != dayWithCero[1] && this.extendReserveForm.extendReserveDate.day < 10) {
        this.extendReserveForm.extendReserveDate.day = '0' + this.extendReserveForm.extendReserveDate.day;
      }
      this.calendarModelExtend = this.extendReserveForm.extendReserveDate.year + '-' + this.extendReserveForm.extendReserveDate.month + '-' + this.extendReserveForm.extendReserveDate.day; // al modelo del calendario para el formulario le asignamos la fecha del dashboard
      console.log(this.calendarModelExtend)
    }
  }
  public hide = false;
  loadAvailableTimes() {
    this.loadding = true;
    let zone = this.zoneModel.id_zone;
    if (zone != null && this.dashboardForm.reserveDate != null) {
      this.hide = true;
      this.dataCalendar()
      this.listSpaces();
      this._dashboard.listTimes(zone, this.calendarModel).subscribe(
        data => {
          this.loadding = false;
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
        },
        error => {
          this.loadding = false;
        });
    }else {
      this.loadding = false;
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'No reservation will be shown until you filter the fields to show',
        confirmButtonColor: '#EF4023'
      })
    } 

  }

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

      let month;
      month = date.getMonth() + 1;//agarra un mes menos? 
      let formattedDate;
      if (month < 10) {
        if (date.getDate() < 10) {
          formattedDate = date.getFullYear() + "-0" + month + "-0" + date.getDate();
        } else {
          formattedDate = date.getFullYear() + "-0" + month + "-" + date.getDate();
        }
      } else {
        if (date.getDate() < 10) {
          formattedDate = date.getFullYear() + "-" + month + "-0" + date.getDate();
        } else {
          formattedDate = date.getFullYear() + "-" + month + "-" + date.getDate();
        }
      }

      this.formAddDetail.date = this.calendarModel;
      this.formAddDetail.reserve_state = 0;
      this.formAddReserve.user.id = this.userInf.id;
      this.formAddReserve.created_at = formattedDate;
      this.formAddDetail.end_date_extend= this.calendarModelExtend;

      console.log("aqui--", this.formAddDetail.start_time);


        this._dashboard.createReserve2(this.formAddDetail).subscribe(
            data => {              
              let response:any = data;
              if(response["car"] == false){
                Swal.fire({
                  type: 'error',
                  title: 'The vehicle has a reservation at this time on another space!',
                  showConfirmButton: true
                })
              }else{
                console.log(response);
                let keys = Object.keys(response);
                console.log(keys);
                let flag = false; 
                let message = "Dates";
                for(let key of keys){
          
                  if(response[key]==false){
                    flag = true;
                    message = message+" "+key+","
                  }
                  console.log(key,response[key]);
                }
                message = message + " couldn't be reserved. "
                if(!flag){
                  $("#closeReserveModal").click();
                  Swal.fire({
                    type: 'success',
                    title: 'Your reservation has been saved!',
                    showConfirmButton: false,
                    timer: 1500
                  });
    
    
                  let email={
                    id:null,
                    to:this.userNotifications.email,
                    subject:"RESERVE " + this.formAddDetail.date,
                    text:"Your reservation has been saved!",
                    viewed:false,
                    user_id:{
                      id:this.userNotifications.id
                    }
                  }
                  this.emails.sendEmail(email).subscribe(
                    data => {
                    }
                  );
    
                }else{
                  $("#closeReserveModal").click();
                  Swal.fire({
                    type: 'error',
                    title: message +'Somebody might have taken your space! Please reload.',
                    showConfirmButton: true
                  })
                }
                this.extendReserveForm.extendReserveDate = null;
                this.calendarModelExtend = null;
                this.ngOnInit();
                this.loadAvailableTimes(); 
              }               
            },
            error => {
              console.log(error);
            }
        );
     
    }
  }
}