import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class ServiceSpaceService {
  baseUrl:any = "http://localhost:8080/api/space";
  public url:any;
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
 });

  constructor(private http: HttpClient) { 
    this.url = API.domain;

  }
  addSpace(data:any){
    return this.http.post(`${this.url}/api/space`,data,{headers:this.httpHeaders});
  }
  listSpace(){
    return this.http.get(`${this.url}/api/space`,{headers:this.httpHeaders});
  }
  editSpace(id,data){
    return this.http.put(`${this.url}/api/space/`+id,data,{headers:this.httpHeaders});
 }
 deleteSpace(data){
  return this.http.delete(`${this.url}/api/space/`+data,{headers:this.httpHeaders})
}
}
