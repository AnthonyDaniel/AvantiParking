import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  baseUrl: any = "http://localhost:8080/api/email";
  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
  });
  constructor(private http: HttpClient) { }
  sendEmail(data){
    return this.http.post(`${this.baseUrl}`,data, { headers: this.httpHeaders });
  }
  userNotifications(id) {
    return this.http.get(`${this.baseUrl}/`+id, { headers: this.httpHeaders });
  }
  changeViewed(id) {
    return this.http.put(`${this.baseUrl}/`+id, { headers: this.httpHeaders });
  }
  deleteNotification(id) {
    return this.http.delete(`${this.baseUrl}/`+id, { headers: this.httpHeaders });
  }
}
