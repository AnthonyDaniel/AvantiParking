import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  public urlTree;
  public token;
  public error;

  constructor(private router: Router,public user:UserService) {

    this.urlTree = this.router.parseUrl(this.router.url);
 
    this.token = this.urlTree.queryParams['token'];
    this.error = this.urlTree.queryParams['error'];
    if(this.token){
      localStorage.setItem('accessToken', this.token);
      this.router.navigateByUrl('administration/parking-lot');
    }
    console.log(this.token);
 };
  ngOnInit() {
  
  }

}
