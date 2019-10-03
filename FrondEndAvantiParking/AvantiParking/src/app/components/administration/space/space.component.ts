import { Component, OnInit } from '@angular/core';
import { ServiceSpaceService } from 'src/app/services/service-space.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  constructor(public space: ServiceSpaceService) { }
  public form = {
    id_space: null,
    name: null,
    type: null,
    state: null,
    user: null,
    zone: null
  }
  public error: String;
  public success: String;
  public status: String;

  filterSpace;
  public spaces;
  ngOnInit() {
    this.listSpace();
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
