import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Client } from './client.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  private user;
  private isLoggedIn: Boolean;
  private userName: String;
  private userEmail: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userEmail = user.email;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.userEmail = null;
    this.router.navigate(['']);
  }

  goToClient() {
    this.router.navigate(['/clients']);
  };
}
