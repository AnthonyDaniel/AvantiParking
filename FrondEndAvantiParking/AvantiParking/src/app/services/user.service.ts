import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl:any = "http://localhost:8080";
  public oauth2UrlRedirect = 'http://localhost:4200/oauth2/redirect';
  public GOOGLE_AUTH_URL = this.baseUrl + '/oauth2/authorize/google?redirect_uri=' + this.oauth2UrlRedirect;
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });
  constructor(private http: HttpClient,private token: TokenService) { 
  }

  loadImg(){
    return this.http.get(`${this.baseUrl}/api/user`,{headers:this.httpHeaders});
  }
  
  changeAuthStatus(value:boolean) {
    this.loggedIn.next(value)
  }

  
}