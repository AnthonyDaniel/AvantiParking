import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';

@Injectable({
   providedIn: 'root'
})
export class ServiceParkingLotService {
   baseUrl: any = "http://localhost:8080/api/parking_lot";
   public url: any;
   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) { 
      this.url = API.domain;
   }
   addParkingLot(data: any) {
      return this.http.post(`${this.url}/api/parking_lot`, data,{headers:this.httpHeaders});
   }
   listParkingLot() {
      return this.http.get(`${this.url}/api/parking_lot`,{headers:this.httpHeaders})
   }
   editParkingLot(id, data) {
      return this.http.put(`${this.url}/api/parking_lot/` + id, data,{headers:this.httpHeaders});
   }
   deleteParkingLot(data) {
      return this.http.delete(`${this.url}/api/parking_lot/` + data,{headers:this.httpHeaders})
   }

}
