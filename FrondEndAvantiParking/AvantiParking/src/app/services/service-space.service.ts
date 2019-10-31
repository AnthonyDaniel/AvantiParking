import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceSpaceService {
  baseUrl:any = "http://localhost:8080/api/space";
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
 });

  constructor(private http: HttpClient) { 

  }
  addSpace(data:any){
    return this.http.post(`${this.baseUrl}`,data,{headers:this.httpHeaders});
  }
  listSpace(){
    return this.http.get(`${this.baseUrl}`,{headers:this.httpHeaders});
  }
  editSpace(id,data){
    return this.http.put(`${this.baseUrl}/`+id,data,{headers:this.httpHeaders});
 }
 deleteSpace(data){
  return this.http.delete(`${this.baseUrl}/`+data,{headers:this.httpHeaders})
}
}
