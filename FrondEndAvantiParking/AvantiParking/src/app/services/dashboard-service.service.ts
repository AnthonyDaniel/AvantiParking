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

   listTimes(id,date){// lista todos los espacios
    return this.http.get(`${this.url}/api/dashboard/`+id+`/`+date,{headers:this.httpHeaders});
  }
  createReserve(data){//faltan parametros
    return this.http.post(`${this.url}`,{headers:this.httpHeaders});
  }
}
