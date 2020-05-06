import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SpaceComponent implements OnInit {
  constructor(private user: UserService,public space: ServiceSpaceService, public _zone: ServiceZoneService) { }
  //modelo zona
  public formZone = {
    id_zone: null,
    name: null,
    paking_lot: null
  }
  //modelo espacio
  public addFormSpace = {
    id_space: null,
    name: null,
    type: null,
    state: null,
    user: null,
    zone: this.formZone
  }
  //modelo espacio
  public editFormSpace = {
    id_space: null,
    name: null,
    type: null,
    state: null,
    user: null,
    zone: this.formZone
  }

  private nullSpace:any = {
    id_space: null,
    name: null,
    type: null,
    state: null,
    user: null,
    zone: this.formZone
  }

  private zoneToken;


  public filterSpace:any = '';

  public zone: any;

  public error: String;
  public success: String;
  public status: String;

  public spaces:any =[];
  public zones;

  public users: any = [];
  public filterUser = "";

  ngOnInit() {
    this.user.getAll().subscribe(data => { this.users = data});
    this.listSpace();
    this.ListZone();
  }

  searchUser(){
    
  }

  listSpace() {//mejor hacer el filtro en el backend ?
    this.zoneToken = JSON.parse(localStorage.getItem('zone'));
    this.addFormSpace.zone.id_zone = this.zoneToken.id_zone;
    this.space.listSpaces(this.zoneToken.id_zone).subscribe(
      data=>{
        this.spaces = data;
      },
      error=>{
      }
    );
  }

  ListSpaceInZone(spaces) {
    //this.spaces = spaces;
    var i = localStorage.getItem('zone');
    var o = JSON.parse(i);
    this.addFormSpace.zone.id_zone=o.id_zone;
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
      }
    )
  }

  onSubmit() {
    if (this.addFormSpace.state == 'Available') {
      this.addFormSpace.state = 0;

    } else if (this.addFormSpace.state == 'Occupied') {
      this.addFormSpace.state = 1;
    }

    if(this.addFormSpace.user==""){
      this.addFormSpace.user=null;
     }

    this.space.addSpace(this.addFormSpace).subscribe(
      data => {
        this.nullSpace = data;
        if(this.nullSpace.name == null){
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'A space with the name '+this.addFormSpace.name+' has already been registered for this zone!',
            confirmButtonColor: '#EF4023'
          })
        }else{
          this.responseSuccess(data);
          $("#closeModal6").click();
          this.addFormSpace.name = null,
          this.addFormSpace.type = null,
          this.addFormSpace.state = null,
          this.addFormSpace.user = null,
          this.addFormSpace.zone.id_zone = null
          Swal.fire({
            type: 'success',
            title: 'The Space has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.ngOnInit();
        }        
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

  deleteAll(){
    Swal.fire({
      title: 'Are you sure to delete all?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.space.deleteAllZoneSpaces(this.zoneToken.id_zone).subscribe(
          data=>{
          },
          error=>{
          }
        );
        Swal.fire(
          'Deleted!',
          'All spaces have been removed.',
          'success'
        )
        this.ngOnInit();
      }
    })
  }

  editSpaceForm() {
    if(this.editFormSpace.state === 'Occupied'){
      this.editFormSpace.state = true;
    }else{
      this.editFormSpace.state =  false;
    }
     var i = localStorage.getItem('zone');
     var o = JSON.parse(i);
     this.editFormSpace.zone.id_zone=o.id_zone;
    
     if(this.editFormSpace.user==""){
      this.editFormSpace.user=null;
     }
    this.space.editSpace(this.editFormSpace.id_space, this.editFormSpace).subscribe(
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
      }
    );
  }

  reloadTable(data){
    this.ngOnInit();
  }

  dataSpaceFormEdit(_spaceAux) {
    if(_spaceAux.state){
      this.editFormSpace.state =  'Occupied';
    }else{
      this.editFormSpace.state =  'Available';
    }
   
    this.editFormSpace.id_space = _spaceAux.id_space;
    this.editFormSpace.name = _spaceAux.name;
    this.editFormSpace.type = _spaceAux.type;
    this.editFormSpace.user = _spaceAux.user;
    this.editFormSpace.zone = _spaceAux.zone;
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
