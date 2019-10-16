import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import Swal from 'sweetalert2';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import * as $ from 'jquery';
import { SpaceComponent } from '../space/space.component';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],

})
@Injectable({
  providedIn: 'root'
})
export class ZoneComponent implements OnInit {

  public formParkingLot = {
    id_parking_lot: null,
    name: null,
    headquarter: null,
  }
  constructor(public _zone: ServiceZoneService, public parking_lot: ServiceParkingLotService, private space: SpaceComponent) { }

  public formZone = {
    id_zone: null,
    name: null,
    parking_lot: this.formParkingLot,
    quantity: null,
    start: null,
  }

  public error: String;
  public success: String;
  public status: String;

  filterZone = "";
  public zones;
  public parkings;

  ngOnInit() {
    this.formZone.name = null;
    this.formZone.parking_lot.id_parking_lot = null;
    this.formZone.quantity = null;
    this.formZone.start = null;
    this.ListZone();
    this.ListParkingLot();
  }
  ListZone() {
    this._zone.listZone().subscribe(
      data => {
        this.zones = data;
      },
      error => console.log(error)
    )
  }
  ListParkingLot() {
    this.parking_lot.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }
  onSubmit() {

    if(this.formZone.quantity <= 100){
      this._zone.addZone(this.formZone).subscribe(
        data => {
          this.responseSuccess(data);
          this.formZone.name = null;
          this.formZone.parking_lot.id_parking_lot = null;
          this.formZone.quantity = null;
          this.formZone.start = null;
          $("#closeModal5").click();
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
  
    }else{
      Swal.fire({
        type: 'error',
        title: 'The quality cannot exceed 100',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  delete(_formZone) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this! It permanently removes all parking associated with the parking area!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._zone.deleteZone(_formZone).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Your zone has been deleted.',
              'success'
            )
            this.ngOnInit();
          }
        )
      }
    })
  }
  editZone() {
    this._zone.editZone(this.formZone.id_zone, this.formZone).subscribe(
      data => {
        $("#closeModal4").click();
        Swal.fire({
          type: 'success',
          title: 'The zone has been updated',
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
  dataZoneFormEdit(_zoneAux) {
    this.formZone.id_zone = _zoneAux.id_zone;
    this.formZone.name = _zoneAux.name;
    this.formZone.parking_lot = _zoneAux.parking_lot;
    this.formZone.quantity = _zoneAux.quantity;
    this.formZone.start = _zoneAux.start;
  }
  responseSuccess(data) {
    this.success = data.data;
    this.status = "success";
  }
  responseError(error) {
    console.log(error)
    this.error = error.error.error;
    this.status = "error";
  }
  spaces(zone) {
    localStorage.setItem('zone', JSON.stringify(zone));
  }

}
