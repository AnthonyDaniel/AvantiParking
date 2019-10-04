import { Component, OnInit } from '@angular/core';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import { Zone } from 'src/app/models/zone';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
  
})
export class ZoneComponent implements OnInit {

  public zone: Zone;
  public zones;
  constructor(public _zone:ServiceZoneService) { }

  private tempZone:any;

  ngOnInit() {
    this.ListZone();
  }
  ListZone(){
    this._zone.listZone().subscribe(
      data=>{
        this.zones = data;
        console.log(data);
      },
      error => console.log(error)
    )
  }
  delete(){
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
