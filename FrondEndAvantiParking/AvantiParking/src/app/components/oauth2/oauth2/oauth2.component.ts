import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  public urlTree;
  public token;
  public error;
  public loggedIn:boolean;

  constructor(private router: Router,public user:UserService,public auth:AuthService) {
    this.urlTree = this.router.parseUrl(this.router.url);
    this.token = this.urlTree.queryParams['token'];
    this.error = this.urlTree.queryParams['error'];
    if(this.token){
      localStorage.setItem('accessToken', this.token);
      this.auth.authStatus.subscribe(value => this.loggedIn = value);
      if(!this.loggedIn){
        setTimeout(() => {
          this.router.navigateByUrl(''); 
        }, 2004);
        setTimeout(() => {
          location.reload(); 
        }, 2005);
      }
    }else{
      this.router.navigateByUrl('');
    }
 };
  ngOnInit() {
  
  }

}
