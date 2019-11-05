import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  private admin = new BehaviorSubject<boolean>(false);
  adminStatus = this.admin.asObservable();

  changeAuthStatus(value:boolean) {
    this.loggedIn.next(value)
  }

  changeAdminStatus(value:boolean) {
    this.admin.next(value)
  }

  constructor() { }

}