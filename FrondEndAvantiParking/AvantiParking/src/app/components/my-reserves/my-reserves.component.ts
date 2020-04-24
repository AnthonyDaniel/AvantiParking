import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { MyReservesServiceService } from 'src/app/services/my-reserves-service.service';

import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

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

  constructor(public user: UserService, public _parking: ServiceParkingLotService,  public _vehicle: VehicleServiceService,public _myReserves:MyReservesServiceService) { }
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

  public reserves:any=[];

  public unvalidDetail:any[];
  public validDetail:any=[];

  ngOnInit() {
    this.getData();    
  }

  loadUser(data) { //metodo para cargar la informacion del usuario
    this.formUser.id = data.id; 
    console.log(this.formUser.id) 
  }

  getData() { // metodo para listar todos las listas con datos
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listarReservas();
      this.listVehicles();
    },
      error => {
        console.log(error);
      });
  }
  listVehicles() { //metodo para listar vehiculos
    this._vehicle.listVehicle("vehiculo").subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
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
        this.reserves = data;
        for(let reserve of this.reserves){
          this.listValidDetails(reserve.id_reservation);
          console.log(this.listValidDetails(reserve.id_reservation))
        }
      },
      error=>{
        console.log(error)
      }
    );
        
  }

  listValidDetails(reserve_id){
    this._myReserves.listUserValidReservesDetails(reserve_id).subscribe(
      data=>{
        this.validDetail = [];
        let detail:any = [];      
        detail = data;
        if(detail.length > 0){          
          for(let item of detail){            
            this.validDetail.push(item);
          } 
        }             
      },
      error=>{
        console.log(error)
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
        console.log(error)
      }
    );
  } */ 

  cancelReserve(reserve_detail){
    this._myReserves.cancelReserve(reserve_detail).subscribe(
      data=>{
        this.ngOnInit();
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
}