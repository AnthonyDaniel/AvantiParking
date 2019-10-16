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

  public formParkingLot = {
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
    this._parking.addParkingLot(this.formParkingLot).subscribe(
      data => {
        this.responseSuccess(data);
        this.formParkingLot.name = null;
          this.formParkingLot.headquarter.id_headquarter = null;
          $("#closeModal2").click();
          Swal.fire({
            type: 'success',
            title: 'The Zone has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.ngOnInit();
      },
      error => this.responseError(error),
    );
  }
  deleteParkingLot(_formParkingLot) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this! If you eliminate this parking, areas and parking areas will be permanently deleted!!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!'
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
    this._parking.editParkingLot(this.formParkingLot.id_parking_lot, this.formParkingLot).subscribe(
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
    this.formParkingLot.id_parking_lot = _parkingLot.id_parking_lot;
    this.formParkingLot.name = _parkingLot.name;
    this.formParkingLot.headquarter = _parkingLot.headquarter;
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
