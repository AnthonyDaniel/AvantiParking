import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHeadquarterService {
   baseUrl:any = "http://localhost:8080/api/headquarter";

  constructor(private http: HttpClient) {

   }
   addHeadquarter(data:any){
      return this.http.post(`${this.baseUrl}`, data);
   }
   listHeadquarter(){
      return this.http.get(`${this.baseUrl}`)
   }
   editHeadquarter(data){
      return this.http.put(`${this.baseUrl}`,data);
   }
   deleteHeadquarter(data){
      return this.http.delete(`${this.baseUrl}/`+data)
   }
}
