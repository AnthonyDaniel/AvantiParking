import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class ServiceZoneService {
  baseUrl:any = "http://localhost:8080/api/zone";
  public url:any;
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
 });
  constructor(private http: HttpClient) { 
    this.url = API.domain;
  }
  addZone(data:any){
    return this.http.post(`${this.url}/api/zone`,data,{headers:this.httpHeaders});
  }
  listZone(){
    return this.http.get(`${this.url}/api/zone`,{headers:this.httpHeaders});
  }
  editZone(id,data){
    return this.http.put(`${this.url}/api/zone/`+id,data,{headers:this.httpHeaders});
 }
  deleteZone(data){
    return this.http.delete(`${this.url}/api/zone/`+data,{headers:this.httpHeaders})
  }
}
