import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ServiceHeadquarterService {
   baseUrl: any = "http://localhost:8080/api/headquarter";

   httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
   });

   constructor(private http: HttpClient) {

   }
   getByID(id:any){
      return this.http.get(`${this.baseUrl}/${id}`, {headers:this.httpHeaders})
   }
   addHeadquarter(data: any) {
      return this.http.post(`${this.baseUrl}`, data,{headers:this.httpHeaders});
   }
   listHeadquarter() {
      return this.http.get(`${this.baseUrl}`, {headers:this.httpHeaders})
   }
   editHeadquarter(id, data) {
      return this.http.put(`${this.baseUrl}/` + id, data,{headers:this.httpHeaders})
   }
   deleteHeadquarter(data) {
      return this.http.delete(`${this.baseUrl}/` + data,{headers:this.httpHeaders})
   }
}
