import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminAfterService implements CanActivate {

  private admin:boolean;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.admin;
  }
  constructor(public auth:AuthService) {
    this.auth.adminStatus.subscribe(value => this.admin = value);
  }

}