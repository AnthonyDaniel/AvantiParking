import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { MyReservesServiceService } from 'src/app/services/my-reserves-service.service';

import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-reserves',
  templateUrl: './my-reserves.component.html',
  styleUrls: ['./my-reserves.component.css']
})
export class MyReservesComponent implements OnInit {

  public parkings
  private u: any;
  private current:any;
  private img;

  constructor(public user: UserService, public _parking: ServiceParkingLotService, public _myReserves:MyReservesServiceService) { }
  public vehicleModel = {
    id: null,
    increment: null
  }
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
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
    });
    this.ListParkings();
    this.listarReservas();
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

  ListParkings() {
    this._parking.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }


  deleteParkingLot(_formParkingLot) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this! If you eliminate this parking, areas and parking areas will be permanently deleted!!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._parking.deleteParkingLot(_formParkingLot).subscribe(
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
        this.detailValid = data
        console.log(this.detailValid)
        for(let det of this.detailValid){
          console.log("fecha del detalle reserva no vigente "+ det.date+" inicio "+  det.start_time+" id detail "+ det.id_reserve_detail)
        }        
      },
      error=>{
        console.log(error)
      }
    );
  }
  listarReservas(){
    var us = this.userInf.id;
    console.log(us)
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''")

    this._myReserves.listUserReserves(this.userInf.id).subscribe(
    
    

      data=>{
        
        this.reservas = data
        //console.log(data)
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