import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
   providedIn: 'root'
})
export class ServiceHeadquarterService {
   baseUrl: any = "http://localhost:8080/api/headquarter";
   public url: any; // objeto creado para almacenar la url de dominio global
   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) {
      this.url = API.domain; // se asigna el valor de la url
   }
   getByID(id:any){
      return this.http.get(`${this.url}/api/headquarter/${id}`, {headers:this.httpHeaders})
   }
   addHeadquarter(data: any) {
      return this.http.post(`${this.url}/api/headquarter`, data,{headers:this.httpHeaders});
   }
   listHeadquarter() {
      return this.http.get(`${this.url}/api/headquarter`, {headers:this.httpHeaders})
   }
   editHeadquarter(id, data) {
      return this.http.put(`${this.url}/api/headquarter/` + id, data,{headers:this.httpHeaders})
   }
   deleteHeadquarter(data) {
      return this.http.delete(`${this.url}/api/headquarter/` + data,{headers:this.httpHeaders})
   }
}
