import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{
  private loggedIn:boolean;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>{
    return !this.loggedIn;
  }
  constructor(public auth:AuthService) {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
   }
}
