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
  constructor(private router: Router, public authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.user = firebase.auth().currentUser;

                if (this.user.email === null || this.user.email != "pdxfoodservice@gmail.com") {
                    alert("Access denied.");
                    this.router.navigate(['']);
                    return Observable.of(false);
                } else {
                  return Observable.of(true);
                }
  }

}
