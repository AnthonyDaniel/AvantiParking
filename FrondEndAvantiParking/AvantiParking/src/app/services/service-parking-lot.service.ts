import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})
export class ServiceParkingLotService {
   baseUrl: any = "http://localhost:8080/api/parking_lot";
   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) { }
   addParkingLot(data: any) {
      return this.http.post(`${this.baseUrl}`, data,{headers:this.httpHeaders});
   }
   listParkingLot() {
      return this.http.get(`${this.baseUrl}`,{headers:this.httpHeaders})
   }
   editParkingLot(id, data) {
      return this.http.put(`${this.baseUrl}/` + id, data,{headers:this.httpHeaders});
   }
   deleteParkingLot(data) {
      return this.http.delete(`${this.baseUrl}/` + data,{headers:this.httpHeaders})
   }

}
