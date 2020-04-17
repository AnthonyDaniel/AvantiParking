import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as API from './api.modules';
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  public url: any;
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });

  constructor(private http: HttpClient) {
    this.url = API.domain;
   }
   //recibe id de zona y fecha
   listTimes(id,date){// lista todos los espacios
    return this.http.get(`${this.url}/api/dashboard/`+id+`/`+date,{headers:this.httpHeaders});
  }
  createReserve(data: any){
    return this.http.post(`${this.url}/api/reserve`,data,{headers:this.httpHeaders});
  }
}
