import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl:any = "http://localhost:8080";
  public oauth2UrlRedirect = 'http://localhost:4200/oauth2/redirect';
  public GOOGLE_AUTH_URL = this.baseUrl + '/oauth2/authorize/google?redirect_uri=' + this.oauth2UrlRedirect;

  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });
  constructor(private http: HttpClient) { 
  }

  loadImg(){
    return this.http.get(`${this.baseUrl}/api/user`,{headers:this.httpHeaders});
  }
  
}