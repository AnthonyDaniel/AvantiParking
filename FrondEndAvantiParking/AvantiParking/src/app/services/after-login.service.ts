import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  public loggedIn: boolean;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.loggedIn){
      this.router.navigateByUrl('');
    }
    return this.loggedIn;
  }
  constructor(public auth: AuthService,private router: Router) {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}
