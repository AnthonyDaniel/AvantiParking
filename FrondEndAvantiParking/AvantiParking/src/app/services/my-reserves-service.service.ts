import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class MyReservesServiceService {
  
  public url: any;
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });
  constructor(private http: HttpClient) {
    this.url = API.domain;
   }

  listUserReserves(user_id){
    return this.http.get(`${this.url}/api/reserves/user/${user_id}`, {headers:this.httpHeaders})
  }

  listUserValidReservesDetails(reserve_id){
    return this.http.get(`${this.url}/api/reserves/valid/${reserve_id}`, {headers:this.httpHeaders})
  }

  listUserUnValidReservesDetails(reserve_id){
    return this.http.get(`${this.url}/api/reserves/unvalid/${reserve_id}`, {headers:this.httpHeaders})
  }

  cancelReserve(detail_id){
    return this.http.delete(`${this.url}/api/reserves/${detail_id}`, {headers:this.httpHeaders})
  }

  
}
