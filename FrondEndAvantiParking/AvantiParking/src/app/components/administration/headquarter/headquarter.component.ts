import { Component, OnInit } from '@angular/core';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { Headquarter } from 'src/app/models/headquarter';

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.css']
})
export class HeadquarterComponent implements OnInit {

  constructor(public headquarter: ServiceHeadquarterService) {

  }

  public form = {
    id_headquarter: null,
    city: null,
    name: null,
    country: null,
  };
  public error: String;
  public success: String;
  public status: String;

  filterHeadquarters;
  public headquarters;

  ngOnInit() {
    this.listHeadquarter();
  }
  listHeadquarter(){
    this.headquarter.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  onSubmit() {
    this.headquarter.addHeadquarter(this.form).subscribe(
      data => {
        this.responseSuccess(data);
        this.form.id_headquarter = null;
        this.form.name = null;
        this.form.country = null;
        this.form.city = null;
      },
      error => this.responseError(error),
    );

  }
  delete(headquarter: Headquarter) {
    headquarter.id_headquarter = this.form.id_headquarter;
    this.headquarter.deleteHeadquarter(headquarter).subscribe(
      data => {
        this.headquarters = this.headquarters.filter(h => h !== headquarter);
        this.responseSuccess(data),
          error => this.responseError(error)
      },
    );
  }
  edit(headquarter: Headquarter) {
    this.headquarter.editHeadquarter(headquarter).subscribe(data => {
      this.responseSuccess(data),
        error => this.responseError(error)
    });
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
