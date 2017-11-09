import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  adminCheck;

  constructor(public afAuth: AngularFireAuth) {
    debugger;
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.user.subscribe(dataLastEmittedFromObserver=>{
    //   this.adminCheck = dataLastEmittedFromObserver;
    //   if(this.adminCheck){
    //     if(this.adminCheck.email != "pdxfoodservice@gmail.com"){
    //       this.logout()
    //       alert("You are not an Administrator")
    //     }
    //   }
    // });
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
