import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {

  public formUser = {
    id: null
  };

  constructor( public _user: UserService, public _vehicle: VehicleServiceService) { }

  public vehicles;
  private formAddReserve = {
    vehicle: null
  }
  ngOnInit() {
    this.getData();
    
    
  }
  loadUser(data) {
    this.formUser.id = data.id;    
  }

  getData() {
    this._user.loadImg().subscribe(data => {
      this.loadUser(data);
      this.listVehicles();
    },
      error => {
        console.log(error);
      });
  }

  listVehicles() {
    this._vehicle.listVehicle(this.formUser.id).subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
