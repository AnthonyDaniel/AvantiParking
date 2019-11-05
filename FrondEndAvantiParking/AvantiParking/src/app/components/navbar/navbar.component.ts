import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user:UserService,private router: Router,
    private Token: TokenService) { }
   
    public loggedIn : boolean;  
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
    this.user.authStatus.subscribe(value=> this.loggedIn = value);
    setTimeout(() => {
    
    },12000);
  }
  loadImg(data){
    this.userInf=data;
    console.log(data);
    this.img = data.imageUrl;
    console.log(this.Token);
  }
  logout(event: MouseEvent) {
    
    event.preventDefault();
    this.Token.remove();
    this.user.changeAuthStatus(false);
    this.router.navigateByUrl('');
    console.log(this.Token);
  }
}
