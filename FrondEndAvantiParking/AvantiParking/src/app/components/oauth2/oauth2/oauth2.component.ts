import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  public urlTree;
  public token;
  public error;

  constructor(private router: Router) {

    this.urlTree = this.router.parseUrl(this.router.url);
 
    this.token = this.urlTree.queryParams['token'];
    this.error = this.urlTree.queryParams['error'];
    if(this.token){
      localStorage.setItem('accessToken', this.token);
    }
    
 };
  ngOnInit() {
  }

}
