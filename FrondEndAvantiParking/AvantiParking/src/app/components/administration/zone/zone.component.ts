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
 
  constructor(public _zone: ServiceZoneService, public parking_lot: ServiceParkingLotService, private space: SpaceComponent) { }

  public formParkingLot = {
    id_parking_lot: null,
    name: null,
    headquarter: null,
  }
  public addFormZone = {
    id_zone: null,
    name: null,
    parking_lot: this.formParkingLot,
    quantity: null,
    start: null,
  }
  public editFormZone = {
    id_zone: null,
    name: null,
    parking_lot: this.formParkingLot,
    quantity: null,
    start: null,
  }

  private nullZone:any = {
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
    this.addFormZone.name = null;
    this.addFormZone.parking_lot.id_parking_lot = null;
    this.addFormZone.quantity = null;
    this.addFormZone.start = null;
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

    if(this.addFormZone.quantity <= 100 && this.addFormZone.start <= 999){
      this._zone.addZone(this.addFormZone).subscribe(
        data => {
          this.nullZone = data;
          if(this.nullZone.name == null){
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'A zone with the name "'+this.addFormZone.name+'" has already been registered for the selected parking lot!',
              confirmButtonColor: '#EF4023'
            })
          }else{
            this.responseSuccess(data);
            this.addFormZone.name = null;
            this.addFormZone.parking_lot.id_parking_lot = null;
            this.addFormZone.quantity = null;
            this.addFormZone.start = null;
            $("#closeModal5").click();
            Swal.fire({
              type: 'success',
              title: 'The Zone has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            this.ngOnInit();
          }          
        },
        error => this.responseError(error),
      );
  
    }else{
      Swal.fire({
        type: 'error',
        title: 'The quality cannot exceed 100 or the start space cannot exceed 999',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  delete(_formZone) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this! It permanently removes all parking associated with the parking area!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
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
    this._zone.editZone(this.editFormZone.id_zone, this.editFormZone).subscribe(
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
    this.editFormZone.id_zone = _zoneAux.id_zone;
    this.editFormZone.name = _zoneAux.name;
    this.editFormZone.parking_lot = _zoneAux.parking_lot;
    this.editFormZone.quantity = _zoneAux.quantity;
    this.editFormZone.start = _zoneAux.start;
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
