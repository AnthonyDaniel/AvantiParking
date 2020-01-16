import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { NotificationsService } from 'src/app/services/notifications.service';

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
  public notifications = 0;

  constructor(public user: UserService, private router: Router, private auth: AuthService
    , public notificationsService: NotificationsService) {
  }

  public userInf: any;
  public notificationsArray: any;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.adminStatus.subscribe(value => this.admin = value);
    this.getAsyncData();
  }
  notificationsUser(data){
    this.notifications=0;
    data.forEach(element => {
      if(!element.viewed){
        this.notifications++;
      }
    });
    this.notificationsArray = data;
  }
  notificationViewed(id){
    this.notificationsService.changeViewed(id).subscribe(
      data=>{
        this.notifications = 0;
      }
    );
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
    this.notificationsService.userNotifications(data.id).subscribe(
      data => {
        this.notificationsUser(data);
      }
    );
  }
  deleteNotifications(n){
    this.notificationsService.deleteNotification(n.id).subscribe(
      data => {
        this.getAsyncData();
      }
    );
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
      }, error => {
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


