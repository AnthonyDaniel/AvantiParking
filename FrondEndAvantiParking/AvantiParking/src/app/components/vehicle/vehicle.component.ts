import { Component, OnInit } from '@angular/core';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(public user: UserService, public vehicle: VehicleServiceService) { }

  filterVehicles = "";

  oldLicensePlate;

  public formUser = {
    id: null
  };

  public addFormVehicle = {
    license_plate: null,
    brand: null,
    model: null,
    user: this.formUser,
  };
  public editFormVehicle = {
    license_plate: null,
    brand: null,
    model: null,
    user: null,
  };

  public error: String;
  public success: String;
  public status: String;

  public vehicles;

  ngOnInit() {
    this.getData();
    
    
  }

  loadUser(data) {
    this.formUser.id = data.id;    
  }

  getData() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listVehicles();
    },
      error => {
        console.log(error);
      });
  }

  listVehicles() {
    this.vehicle.listVehicle(this.formUser.id).subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  //incompleto
  listar() {

  //  this.vehicle.listVehicle().subscribe(
      //data => {

        //this.vehicles = data;
        var words = this.vehicles;
        const result = words.filter(word => word.username == this.addFormVehicle.user);
        this.vehicles = result;

      //},
      error => {
        Swal.fire({
          type: 'error',
          title: 'Error del sistema',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error);
      }
    //);
  }

  addVehicle() {
    this.addFormVehicle.user.id = this.formUser.id;
    this.vehicle.addVehicle(this.addFormVehicle).subscribe(
      data => {
        this.responseSuccess(data);
        this.addFormVehicle.license_plate = null;
        this.addFormVehicle.brand = null;
        this.addFormVehicle.model = null;
        this.addFormVehicle.user = null;
        Swal.fire({
          type: 'success',
          title: 'The vehicle has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        $("#closeModal1").click();
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteVehicle(_formVehicle) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'Are you sure?',
      text: "You will not be able to reverse this. Your vehicle will be deleted!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4023',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.vehicle.deleteVehicle(_formVehicle).subscribe(
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

  editVehicle() {
    this.vehicle.editVehicle(this.oldLicensePlate, this.editFormVehicle).subscribe(
      data => {
        $("#closeModal1").click();
        Swal.fire({
          type: 'success',
          title: 'The Vehicle has been updated',
          showConfirmButton: false,
          timer: 1500
        })
        $("#closeModal").click();
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

  dataVehicleFormEdit(_vehicle) {
    this.oldLicensePlate = _vehicle.license_plate;
    console.log(this.oldLicensePlate)
    this.editFormVehicle.license_plate = _vehicle.license_plate;
    this.editFormVehicle.brand = _vehicle.brand;
    this.editFormVehicle.model = _vehicle.model;
    this.editFormVehicle.user = this.formUser;
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
