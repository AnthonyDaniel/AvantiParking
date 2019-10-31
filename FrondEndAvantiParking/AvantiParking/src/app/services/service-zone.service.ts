import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceZoneService {
  baseUrl:any = "http://localhost:8080/api/zone";
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
 });
  constructor(private http: HttpClient) { 

  }
  addZone(data:any){
    return this.http.post(`${this.baseUrl}`,data,{headers:this.httpHeaders});
  }
  listZone(){
    return this.http.get(`${this.baseUrl}`,{headers:this.httpHeaders});
  }
  editZone(id,data){
    return this.http.put(`${this.baseUrl}/`+id,data,{headers:this.httpHeaders});
 }
  deleteZone(data){
    return this.http.delete(`${this.baseUrl}/`+data,{headers:this.httpHeaders})
  }
}
