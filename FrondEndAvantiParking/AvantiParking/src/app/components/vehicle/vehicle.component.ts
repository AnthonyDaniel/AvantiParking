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
  private nullVehicle: any = {//se utiliza al registrar un vehiculo, el back end devuelve uno objeto vacio quiere decir que esta regitrado
    license_plate: null,
    brand: null,
    model: null,
    user: null,
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
      });
  }

  listVehicles() {
    this.vehicle.listVehicle(this.formUser.id).subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
      }
    );
  }

  addVehicle() {
    this.addFormVehicle.user.id = this.formUser.id; 
    this.vehicle.addVehicle(this.addFormVehicle).subscribe(
      data => { 
        this.nullVehicle = data;       
        if(this.nullVehicle.license_plate === null){ //si viene vacio el vehiculo ya esta registrado
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'A vehicle with the license plate '+this.addFormVehicle.license_plate+' has already been registered!',
            confirmButtonColor: '#EF4023'
          })
        }else{
          this.responseSuccess(data);
          this.addFormVehicle.license_plate = null;
          this.addFormVehicle.brand = null;
          this.addFormVehicle.model = null;
          this.addFormVehicle.user.id = null;
          Swal.fire({
            type: 'success',
            title: 'The vehicle has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          $("#closeModal1").click();
          this.ngOnInit();
        }
      },
      error => {
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
          },
          error=>{
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'The vehicle cannot be eliminated, since it is in a reservation',
              confirmButtonColor: '#EF4023'
            })
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
      }
    );
  }

  dataVehicleFormEdit(_vehicle) {
    this.oldLicensePlate = _vehicle.license_plate;
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
