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
   listMyReservesById(){
     
   }
}
