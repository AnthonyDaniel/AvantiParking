import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceParkingLotService {
  baseUrl:any = "http://localhost:8080/api/parking_lot";

  constructor(private http: HttpClient) { }
     addParkingLot(data:any){
        return this.http.post(`${this.baseUrl}`, data);
     }
     listParkingLot(){
        return this.http.get(`${this.baseUrl}`)
     }
     editParkingLot(data){
        return this.http.put(`${this.baseUrl}`,data);
     }
     deleteParkingLot(data){
        return this.http.delete(`${this.baseUrl}`,data);
     }
  
}
