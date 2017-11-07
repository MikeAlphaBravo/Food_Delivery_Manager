import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AuthenticationService } from "./authentication.service";
import * as firebase from 'firebase/app';

@Injectable()
export class AdminGuardService implements CanActivate {
  user;
  isLoggedIn;
  userEmail
  constructor(private router: Router, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userEmail = user.email;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
                if (this.userEmail === "pdxfoodservice@gmail.com") {
                    return Observable.of(true);

                } else if (this.userEmail != "pdxfoodservice@gmail.com" ){
                  alert("Access Denied")
                  this.router.navigate(['']);
                  return Observable.of(false);
                }

  }

}
