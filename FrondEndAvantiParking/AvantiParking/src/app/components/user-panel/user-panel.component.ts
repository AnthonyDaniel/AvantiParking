import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ServiceHeadquarterService } from 'src/app/services/service-headquarter.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  private img;
  private headquarters: any = [];
  private u: any;
  private current:any;
  private userInf = {
    name: null,
    imageUrl: null,
    headquarter: ''
  };
  constructor(public user: UserService, private router: Router, private auth: AuthService, public h: ServiceHeadquarterService) {
  }
  ngOnInit() {
    this.h.listHeadquarter().subscribe(
      data => {
        this.headquarters = data;
      }
    );
    this.user.loadImg().subscribe(data => {
      this.loadUser(data);
    });
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
