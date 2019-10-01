import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceZoneService {
  baseUrl:any = "http://localhost:8080/api/zone";
  constructor(private http: HttpClient) { 

  }
  addZone(data:any){
    return this.http.post(`${this.baseUrl}`,data);
  }
  listZone(){
    return this.http.get(`${this.baseUrl}`);
  }
  editZone(data){
    return this.http.put(`${this.baseUrl}`, data);
  }
  deleteZone(data){
    return this.http.delete(`${this.baseUrl}`,data)
  }
}
