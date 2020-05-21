import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { MyReservesServiceService } from 'src/app/services/my-reserves-service.service';

import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-my-reserves',
  templateUrl: './my-reserves.component.html',
  styleUrls: ['./my-reserves.component.css']
})
export class MyReservesComponent implements OnInit {

  private u: any;
  private current:any;
  private img;
  public vehicles;
  public emply =true;

  constructor(public user: UserService, public _parking: ServiceParkingLotService,  public _vehicle: VehicleServiceService,public _myReserves:MyReservesServiceService,
    public emails: NotificationsService) { }
  public vehicleModel = {
    id: null,
    increment: null
  }
  public formUser = {
    id: null
  };
  public userModel = { 
    id: null,
    name: null,
    vehicule: this.vehicleModel,
  }

  public reserveModel:any = {
    id_reservation: null,
    created_at: null,
    user: this.userModel,
    vehicle: this.vehicleModel,

  }

  public userInf = {
    id: null,
    name: null,
    imageUrl: null,
    headquarter: ''
  };

  public reserves:any=[]
  
  public userNotifications;
  public unvalidDetail:any[];
  public validDetail:any=[];

  ngOnInit() {
    this.getData();    
  }

  loadUser(data) { //metodo para cargar la informacion del usuario
    this.formUser.id = data.id; 
    this.userNotifications=data;
  }

  getData() { // metodo para listar todos las listas con datos
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listarReservas();
      this.listVehicles();
    },
      error => {
      });
  }
  listVehicles() { //metodo para listar vehiculos
    this._vehicle.listVehicle("vehiculo").subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
      }
    );
  }

  deleteReserve(_formReserve) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this! If you cancel this reserve, it will be permanently deleted!!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, cancel it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._parking.deleteParkingLot(_formReserve).subscribe(
          data => {
            this.ngOnInit();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        )
      }
    })
  }

  listarReservas(){
    var us = this.formUser.id;//?
    this._myReserves.listUserReserves(this.formUser.id).subscribe(   
      data=>{   
        this.validDetail = [];  
        this.reserves = data;
       
        console.log(this.reserves.created_at)
        for(let reserve of this.reserves){
          this.emply = false;
          this.listValidDetails(reserve.id_reservation);   
          reserve.created_at = reserve.created_at + " 1"
          console.log(reserve.created_at)       

        }
     
      },
      error=>{
      }
    );
        
  }

  listValidDetails(reserve_id){
    this._myReserves.listUserValidReservesDetails(reserve_id).subscribe(
      data=>{
        let detail:any = [];      
        detail = data;
        if(detail.length > 0){          
          for(let item of detail){            
            this.validDetail.push(item);
          } 
        }        
        console.log(this.validDetail)             
      },
      error=>{
      }
    );
  }

  //si fuera necesaria
  /*listValidUnvalidDetails(reserve_id){
    this._myReserves.listUserUnValidReservesDetails(reserve_id).subscribe(
      data=>{
        let detail:any = [];      
        detail = data;
        if(detail.length > 0){ ;
          for(let item of detail){            
            this.unvalidDetail.push(item);
          } 
        }              
      },
      error=>{
      }
    );
  } */ 

  cancelReserve(reserve_detail){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })
    Swal.fire({
      title: 'Are you sure?',
      text: "No podrás revertir esto. ¡Tu reserva será cancelada!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._myReserves.cancelReserve(reserve_detail).subscribe(
          data=>{
            this.ngOnInit();
            Swal.fire(
              'Deleted!',
              'Your reservation has been successfully canceled',
              'success'
            )
            let email={
              id:null,
              to:this.userNotifications.email,
              subject:"RESERVE CANCELE",
              text:"Your reservation has been successfully canceled!",
              viewed:false,
              user_id:{
                id:this.userNotifications.id
              }
            }
            this.emails.sendEmail(email).subscribe(
              data => {
              }
            );
          },
          error=>{
          }
        );
      }
    })

    
  }
}