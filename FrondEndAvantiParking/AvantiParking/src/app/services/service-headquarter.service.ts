import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceHeadquarterService {
  private baseUrl: 'http://localhost:8080/api/headquarter/headquarter';

  constructor(private http: HttpClient) {

   }
   addHeadquarter(data:any){
      return this.http.post(`${this.baseUrl}/addHeadquarter`, data)
   }
   listHeadquarter(){
      return this.http.get(`${this.baseUrl}/listHeadquarter`)
   }
   editHeadquarter(data){
      return this.http.put(`${this.baseUrl}/editHeadquarter`,data)
   }
   deleteHeadquarter(data){
      return this.http.delete(`${this.baseUrl}/deleteHeadquarter`,data)
   }
}
