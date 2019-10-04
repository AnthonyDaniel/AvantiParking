import { Component, OnInit } from '@angular/core';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';
@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
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
  public form = {
    name: null,
    type: null,
    state: null,
    user: null,
    zone: this.formZone
  }
  

  public error: String;
  public success: String;
  public status: String;

  filterSpace;
  public spaces;
  public zones;
  ngOnInit() {
    this.listSpace();
    this.ListZone();
  }
  listSpace(){
    this.space.listSpace().subscribe(
      data=>{
        this.spaces = data;
        console.log(data)
      },
      error =>{
        console.log(error);
      }
      
    );
  }
  ListZone(){
    this._zone.listZone().subscribe(
      data=>{
        this.zones = data;
      },
      error => console.log(error)
    )
  }
  onSubmit(){
    if(this.form.state == 'Available'){
      this.form.state = 0;
     
    }else if(this.form.state== 'Occupied'){
      this.form.state = 1;
    }
    console.log(this.form);
    this.space.addSpace(this.form).subscribe(
      
      data=>{
        console.log(data);
        this.responseSuccess(data);
        this.form.name= null,
        this.form.type= null,
        this.form.state= null,
        this.form.user= null,
        this.form.zone.id_zone= null
        
      },
      error=> this.responseError(error),
    );
    Swal.fire({
      type: 'success',
      title: 'The Space has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  delete(){
    Swal.fire({
      title: 'Are you sure delete?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        //codigo
        Swal.fire(
          'Deleted!',
          'The Space has been deleted.',
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
