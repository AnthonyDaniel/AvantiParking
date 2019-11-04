import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user:UserService) { }
  navbarOpen = false;
  public img;
  public userInf={
     name:null,
     imageUrl:null
  };
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
    this.user.loadImg().subscribe(data=>{this.loadImg(data)});
  }
  loadImg(data){
    this.userInf=data;
    console.log(data);
    this.img = data.imageUrl;
    console.log(this.img);
  }
}
