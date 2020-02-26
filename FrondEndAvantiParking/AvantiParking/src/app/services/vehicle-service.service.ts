import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  baseUrl: any = "http://localhost:8080/api/vehicle";

  httpHeaders = new HttpHeaders({
     'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });

  constructor(private http: HttpClient) { }
  
  getByPlate(plate:any){
     return this.http.get(`${this.baseUrl}/${plate}`, {headers:this.httpHeaders})
  }
  addVehicle(data: any) {
     return this.http.post(`${this.baseUrl}`, data,{headers:this.httpHeaders});
  }
  listVehicle(plate:any) {
     return this.http.get(`${this.baseUrl}/u/${plate}`, {headers:this.httpHeaders})
  }
  editVehicle(plate, data) {
     return this.http.put(`${this.baseUrl}/` + plate, data,{headers:this.httpHeaders})
  }
  deleteVehicle(data) {
     return this.http.delete(`${this.baseUrl}/` + data,{headers:this.httpHeaders})
  }
}
