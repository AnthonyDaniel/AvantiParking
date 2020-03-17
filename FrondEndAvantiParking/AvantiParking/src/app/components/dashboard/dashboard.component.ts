import { Component, OnInit } from '@angular/core';
import { ServiceParkingLotService } from 'src/app/services/service-parking-lot.service';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ServiceZoneService } from 'src/app/services/service-zone.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public parkings
  public zones
  private img;
  public headquarters;
  private u: any;
  private current:any;
  private userInf = {
    name: null,
    imageUrl: null,
    headquarter: ''
  };
 
  constructor(public user: UserService, private router: Router, private auth: AuthService,
    public _parking: ServiceParkingLotService,public _headquarter: ServiceHeadquarterService,
    public _zone: ServiceZoneService) { }

  ngOnInit() {
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
    });
    this.ListHeadquarters();
    this.ListParkings();
    this.ListZones();
  }

  ListParkings() {
    this._parking.listParkingLot().subscribe(
      data => {
        this.parkings = data;
      },
      error => console.log(error)
    )
  }
  ListHeadquarters(){
    this._headquarter.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
      }
    );
  }

  ListZones() {
    this._zone.listZone().subscribe(
      data => {
        this.zones = data;
      },
      error => console.log(error)
    )
  }
  loadUser(data) {
    this.userInf = data;
    this.u = data;
    this.img = data.imageUrl;
    if (data.headquarter == null) {
      this.userInf.headquarter = '';
    } else {
      this.userInf.headquarter = data.headquarter;
      this.current = data.headquarter.name;
    }
  }
  allocateHeadquarters() {
    var headquarter = {
      id_headquarter: this.u.headquarter,
      name: null,
      country: null,
      city: null,
    }
    this.auth.adminStatus.subscribe(value => this.u.role = value);
    this.u.headquarter = headquarter;
    this.user.modify(this.u).subscribe(
      data => {
        Swal.fire({
          type: 'success',
          title: 'The user was correctly assigned the headquarters, now on the dasboard and in the reservations, they will appear by default the selected headquarters',
          showConfirmButton: false,
          timer: 4500
        });
        this.ngOnInit();
      },
      error => {
        Swal.fire({
          type: 'error',
          title: 'Failed to assign headquarters, try again or contact the application administrator',
          showConfirmButton: false,
          timer: 4500
        })
      }
    );
  }
  headquarterUser(data) {
    this.userInf.headquarter = data.name;
  }
}
