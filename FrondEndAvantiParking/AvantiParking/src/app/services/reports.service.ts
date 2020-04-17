import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';

@Injectable({
   providedIn: 'root'
})
export class ReportsService {
   public url: any;
   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) { 
      this.url = API.domain;
   }
    listReservation() {
      return this.http.get(`${this.url}/api/reservation`,{headers:this.httpHeaders});
   }
 
}
