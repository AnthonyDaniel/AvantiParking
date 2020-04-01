import { Component, OnInit,Injectable } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import Swal from 'sweetalert2';
import { Parking_lot } from 'src/app/models/parking_lot';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ParkingLotComponent implements OnInit {

  public formHeadquarter = {
    id_headquarter: null,
    name: null,
    country: null,
    city: null,
  }
  constructor(public _parking: ServiceParkingLotService, public _headquarter: ServiceHeadquarterService) { }

  filterParkingLot = "";

  public addFormParkingLot = {
    id_parking_lot: null,
    name: null,
    headquarter: this.formHeadquarter,
  }
  public editFormParkingLot = {
    id_parking_lot: null,
    name: null,
    headquarter: this.formHeadquarter,
  }

  private nullParkingLot: any = {
    id_parking_lot: null,
    name: null,
    headquarter: this.formHeadquarter,
  }

  public error: String;
  public success: String;
  public status: String;

  public parkings;
  public headquarters;

  ngOnInit() {
    this.ListParkingLot();
    this.ListHeadquarters();
  }
  ListParkingLot() {
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
      },
      error => console.log(error)
    )
  }
  addParkingLot() {
    this._parking.addParkingLot(this.addFormParkingLot).subscribe(
      data => {
        this.nullParkingLot = data;
        if(this.nullParkingLot.name == null){
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'A parking lot with the name '+this.addFormParkingLot.name+' has already been registered for the selected headquarter!',
            confirmButtonColor: '#EF4023'
          })
        }else{
          this.responseSuccess(data);
          this.addFormParkingLot.name = null;
            this.addFormParkingLot.headquarter.id_headquarter = null;
            $("#closeModal2").click();
            Swal.fire({
              type: 'success',
              title: 'The Parking has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            this.ngOnInit();
        }        
      },
      error => this.responseError(error),
    );
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
  editParkingLot() {
    this._parking.editParkingLot(this.editFormParkingLot.id_parking_lot, this.editFormParkingLot).subscribe(
      data => {
        $("#closeModal3").click();
        Swal.fire({
          type: 'success',
          title: 'The parking lot has been updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }
  dataParkingLotFormEdit(_parkingLot) {
    this.editFormParkingLot.id_parking_lot = _parkingLot.id_parking_lot;
    this.editFormParkingLot.name = _parkingLot.name;
    this.editFormParkingLot.headquarter = _parkingLot.headquarter;
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
