import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceSpaceService {
  baseUrl:any = "http://localhost:8080/api/space";
  constructor(private http: HttpClient) { 

  }
  addSpace(data:any){
    return this.http.post(`${this.baseUrl}`,data);
  }
  listSpace(){
    return this.http.get(`${this.baseUrl}`);
  }
  editSpace(data){
    return this.http.put(`${this.baseUrl}`, data);
  }
  deleteSpace(data){
    return this.http.delete(`${this.baseUrl}`,data)
  }
}
