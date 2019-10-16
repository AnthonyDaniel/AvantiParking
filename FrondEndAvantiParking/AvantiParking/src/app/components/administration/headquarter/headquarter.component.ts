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

  public formHeadquarter = {
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
    this.headquarter.addHeadquarter(this.formHeadquarter).subscribe(
      data => {
        this.responseSuccess(data);
        this.formHeadquarter.name = null;
        this.formHeadquarter.country = null;
        this.formHeadquarter.city = null;
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this. Parking and areas housed in this headquarters are deleted!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#89CA8E',
      cancelButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!'
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
    this.headquarter.editHeadquarter(this.formHeadquarter.id_headquarter, this.formHeadquarter).subscribe(
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
    this.formHeadquarter.id_headquarter = _headquarter.id_headquarter;
    this.formHeadquarter.name = _headquarter.name;
    this.formHeadquarter.city = _headquarter.city;
    this.formHeadquarter.country = _headquarter.country;
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
