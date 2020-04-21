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
  public userModel = { //copia de un modelo de headquarters
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

  public reservas:any=[]
  public detailValid:any=[]
  public detailUnValid:any=[]

  ngOnInit() {
   this.getData();
  
    
  }
  loadUser(data) {
    this.formUser.id = data.id;  
    console.log(this.formUser.id)  
  }

  getData() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listarReservas();
      this.listVehicles();
    },
      error => {
        console.log(error);
      });
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

  listValidDetails(reserve_id){
    this._myReserves.listUserValidReservesDetails(reserve_id).subscribe(
      data=>{
        this.detailValid = data
        console.log(this.detailValid)
        for(let det of this.detailValid){
          console.log("fecha de la reserva vigente "+ det.date+" inicio "+  det.start_time+" id detail "+ det.id_reserve_detail)
          
        }        
      },
      error=>{
        console.log(error)
      }
    );
  }

  listValidUnvalidDetails(reserve_id){
    this._myReserves.listUserUnValidReservesDetails(reserve_id).subscribe(
      data=>{
        this.detailUnValid = data
        console.log(this.detailUnValid)
        for(let det of this.detailUnValid){
          console.log("fecha del detalle reserva no vigente "+ det.date+" inicio "+  det.start_time+" id detail "+ det.id_reserve_detail)
        }        
      },
      error=>{
        console.log(error)
      }
    );
  }
  listarReservas(){
    var us = this.formUser.id;
    console.log(this.formUser.id)
    this._myReserves.listUserReserves(this.formUser.id).subscribe(   
      data=>{
        this.reservas = data
        for(let res of this.reservas){
          console.log("id reserva"+res.id_reservation)
          console.log("id user "+res.user.id)
          console.log("placa vehiculo "+res.vehicle.license_plate)
          this.listValidDetails(res.id_reservation);
          this.listValidUnvalidDetails(res.id_reservation);
        }
      },
      error=>{
        console.log(error)
      }
    );
    
  }
 
}