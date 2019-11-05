import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  loggedIn() {
    const token = this.getToken();
    if (token != null) {
      return true;
    }
    return false;
  }
  remove() {
    localStorage.removeItem('token');
  }
}
