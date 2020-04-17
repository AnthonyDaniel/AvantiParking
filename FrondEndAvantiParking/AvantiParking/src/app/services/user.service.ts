import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl:any = "http://localhost:8080";
  public oauth2UrlRedirect = 'http://localhost:4200/oauth2/redirect';
  public GOOGLE_AUTH_URL = this.baseUrl + '/oauth2/authorize/google?redirect_uri=' + this.oauth2UrlRedirect;
  public url: any;

  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.token.getToken()
  });
  constructor(private http: HttpClient,private token:TokenService) { 
    this.url = API.domain;
  }
  loadImg(){
    return this.http.get(`${this.url}/api/user`,{headers:this.httpHeaders});
  }
  getAll(){
    return this.http.get(`${this.url}/api/users`,{headers:this.httpHeaders});
  }
  modify(data){
    return this.http.put(`${this.url}/api/user/${data.id}`,data,{headers:this.httpHeaders});
  }
}