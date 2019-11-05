import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { Headquarter } from 'src/app/models/headquarter';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HeadquarterComponent implements OnInit {

  constructor(public headquarter: ServiceHeadquarterService) { }

  filterHeadquarters = "";

  public addFormHeadquarter = {
    id_headquarter: null,
    name: null,
    country: null,
    city: null,
  };
  public editFormHeadquarter = {
    id_headquarter: null,
    name: null,
    country: null,
    city: null,
  };
  public error: String;
  public success: String;
  public status: String;

  public headquarters;

  ngOnInit() {
    this.listHeadquarter();
  }
  listHeadquarter() {
    this.headquarter.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  addHeadquarter() {
    this.headquarter.addHeadquarter(this.addFormHeadquarter).subscribe(
      data => {
        this.responseSuccess(data);
        this.addFormHeadquarter.name = null;
        this.addFormHeadquarter.country = null;
        this.addFormHeadquarter.city = null;
        Swal.fire({
          type: 'success',
          title: 'The headquarter has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        $("#closeModal1").click();
        this.ngOnInit();
      },
      error => this.responseError(error),
    );
  }
  deleteHeadquarter(_formHeadquarter) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this. Parking and areas housed in this headquarters are deleted!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.headquarter.deleteHeadquarter(_formHeadquarter).subscribe(
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
  editHeadquarter() {
    this.headquarter.editHeadquarter(this.editFormHeadquarter.id_headquarter, this.editFormHeadquarter).subscribe(
      data => {
        $("#closeModal1").click();
        Swal.fire({
          type: 'success',
          title: 'The headquarter has been updated',
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
  dataHeadquarterFormEdit(_headquarter) {
    this.editFormHeadquarter.id_headquarter = _headquarter.id_headquarter;
    this.editFormHeadquarter.name = _headquarter.name;
    this.editFormHeadquarter.city = _headquarter.city;
    this.editFormHeadquarter.country = _headquarter.country;
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
