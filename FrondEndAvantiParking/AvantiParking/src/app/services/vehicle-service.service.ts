import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  baseUrl: any = "http://localhost:8080/api/vehicle";
  public url:any;
  httpHeaders = new HttpHeaders({
     'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });

  constructor(private http: HttpClient) { 
     this.url = API.domain;
  }
  
  getByPlate(plate:any){
     return this.http.get(`${this.url}/api/vehicle/${plate}`, {headers:this.httpHeaders})
  }
  addVehicle(data: any) {
     return this.http.post(`${this.url}/api/vehicle`, data,{headers:this.httpHeaders});
  }
  listVehicle(plate:any) {
     return this.http.get(`${this.url}/api/vehicle/u/${plate}`, {headers:this.httpHeaders})
  }
  editVehicle(plate, data) {
     return this.http.put(`${this.url}/api/vehicle/` + plate, data,{headers:this.httpHeaders})
  }
  deleteVehicle(data) {
     return this.http.delete(`${this.url}/api/vehicle/` + data,{headers:this.httpHeaders})
  }
}
