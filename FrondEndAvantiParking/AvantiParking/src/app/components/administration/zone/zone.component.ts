import { Component, OnInit } from '@angular/core';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import Swal from 'sweetalert2';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
  
})
export class ZoneComponent implements OnInit {
  
  public formParkingLot = {
    id_parking_lot: null,
    name: null,
    headquarter: null,
  }
  constructor(public _zone:ServiceZoneService, public parking_lot: ServiceParkingLotService) { }

  

  public formZone ={
    id_zone:null,
    name: null,
    parking_lot: this.formParkingLot,
  }

  public error: String;
  public success: String;
  public status: String;

  filterZone;
  public zones;
  public parkings;

  ngOnInit() {
    this.ListZone();
    this.ListParkingLot();
  }
  ListZone(){
    this._zone.listZone().subscribe(
      data=>{
        console.log(data);
        this.zones = data;
        console.log(data);
      },
      error => console.log(error)
    )
  }
  ListParkingLot(){
    this.parking_lot.listParkingLot().subscribe(
      data=>{
        console.log(data);
        this.parkings = data;
      },
      error => console.log(error)
    )
  }
  onSubmit(){
    console.log(this.formZone)
    this._zone.addZone(this.formZone).subscribe(
      data=>{
        console.log(data);
        this.responseSuccess(data);
        this.formZone.name=null,
        this.formZone.parking_lot.id_parking_lot=null
      },
      error=> this.responseError(error),
    );
    Swal.fire({
      type: 'success',
      title: 'The Zone has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.ngOnInit();
  }
  delete(_formZone){
    console.log(_formZone);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
          this._zone.deleteZone(_formZone).subscribe(
            data=>{
              console.log(data);
              this.ngOnInit();
            }
          )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
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
}
