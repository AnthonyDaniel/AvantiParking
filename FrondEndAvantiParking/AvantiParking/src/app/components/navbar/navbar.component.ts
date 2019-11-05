import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;
  public admin: boolean;
  public navbarOpen = false;
  public img;
  private asyncResult;

  constructor(public user: UserService, private router: Router, private auth: AuthService) {
  }

  public userInf = {
    name: null,
    imageUrl: null
  };

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.adminStatus.subscribe(value => this.admin = value);
    this.getAsyncData();
  }
  loadUser(data) {
    this.userInf = data;
    if (data.role) {
      this.auth.changeAdminStatus(true);
    } else {
      this.auth.changeAdminStatus(false);
      this.router.navigateByUrl('');
    }
    if (data.email == null) {
      this.auth.changeAdminStatus(false);
      this.auth.changeAuthStatus(false);
      localStorage.removeItem('accessToken');
      this.router.navigateByUrl('');
    } else {
      this.auth.changeAuthStatus(true);
    }
    this.img = data.imageUrl;
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    this.auth.changeAdminStatus(false);
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
  async getAsyncData() {
    if (localStorage.getItem('accessToken') == null) {
      this.auth.changeAdminStatus(false);
      this.auth.changeAuthStatus(false);
    } else {
      this.user.loadImg().subscribe(data => {
        this.loadUser(data);
      },error=>{
        this.auth.changeAdminStatus(false);
        this.auth.changeAuthStatus(false);
        localStorage.removeItem('accessToken');
        this.router.navigateByUrl('');
      });
    }
    setTimeout(() => {
      this.getAsyncData()
    }, 3000);
  }
}


