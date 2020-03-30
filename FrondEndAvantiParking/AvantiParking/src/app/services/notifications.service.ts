import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as API from './api.modules';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  baseUrl: any = "http://localhost:8080/api/email";
  public url: any;
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });
  constructor(private http: HttpClient) {
    this.url = API.domain;
   }
  sendEmail(data){
    return this.http.post(`${this.url}/api/email`,data, { headers: this.httpHeaders });
  }
  userNotifications(id) {
    return this.http.get(`${this.url}/api/email/`+id, { headers: this.httpHeaders });
  }
  changeViewed(id) {
    return this.http.put(`${this.url}/api/email/`+id, id, { headers: this.httpHeaders });
  }
  deleteNotification(id) {
    return this.http.delete(`${this.url}/api/email/`+id, { headers: this.httpHeaders });
  }
}
