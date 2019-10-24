import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SpaceComponent implements OnInit {
  //modelo zona
  public formZone = {
    id_zone: null,
    name: null,
    paking_lot: null
  }
  constructor(public space: ServiceSpaceService, public _zone: ServiceZoneService) { }
  //modelo espacio
  public formSpace = {
    id_space: null,
    name: null,
    type: null,
    state: null,
    user: null,
    zone: this.formZone
  }

  public filterSpace:any = '';

  public zone: any;

  public error: String;
  public success: String;
  public status: String;

  public spaces:any =[];
  public zones;

  ngOnInit() {
    this.listSpace();
    this.ListZone();
  }
  listSpace() {
    this.spaces =[];
    this.space.listSpace().subscribe(
      data => {
        this.ListSpaceInZone(data);
      },
      error => {
        console.log(error);
      }

    );
  }
  ListSpaceInZone(spaces) {
    //this.spaces = spaces;
    var i = localStorage.getItem('zone');
    var o = JSON.parse(i);
    this.formSpace.zone.id_zone=o.id_zone;
    for (var n = 0; n < spaces.length; n++) {
      if (spaces[n].zone.id_zone == o.id_zone) {
        this.spaces.push(spaces[n]);
      }
    }
  }
  ListZone() {
    this._zone.listZone().subscribe(
      data => {
        this.zones = data;
      },
      error => console.log(error)
    )
  }
  onSubmit() {
    if (this.formSpace.state == 'Available') {
      this.formSpace.state = 0;

    } else if (this.formSpace.state == 'Occupied') {
      this.formSpace.state = 1;
    }
    this.space.addSpace(this.formSpace).subscribe(

      data => {
        this.responseSuccess(data);
        $("#closeModal6").click();
        this.formSpace.name = null,
          this.formSpace.type = null,
          this.formSpace.state = null,
          this.formSpace.user = null,
          this.formSpace.zone.id_zone = null
          Swal.fire({
            type: 'success',
            title: 'The Space has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.ngOnInit();
      },
      error => this.responseError(error),
    );
  }
  deleteSpace(_formSpace) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure delete?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.space.deleteSpace(_formSpace).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'The Space has been deleted.',
              'success'
            )
            this.ngOnInit();
          }
        )
      }
    })
  }
  editSpaceForm() {
    if(this.formSpace.state === 'Occupied'){
      this.formSpace.state = true;
    }else{
      this.formSpace.state =  false;
    }
    this.space.editSpace(this.formSpace.id_space, this.formSpace).subscribe(
      data => {
        $("#closeModal7").click();
        Swal.fire({
          type: 'success',
          title: 'The parking lot has been updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.listSpace();
      },
      error => {
        console.log(error);
      }
    );
  }

  reloadTable(data){
    console.log(data)
    this.ngOnInit();
  }

  dataSpaceFormEdit(_spaceAux) {
    if(_spaceAux.state){
      this.formSpace.state =  'Occupied';
    }else{
      this.formSpace.state =  'Available';
    }
    this.formSpace.id_space = _spaceAux.id_space;
    this.formSpace.name = _spaceAux.name;
    this.formSpace.type = _spaceAux.type;
    this.formSpace.user = _spaceAux.user;
    this.formSpace.zone = _spaceAux.zone;
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
