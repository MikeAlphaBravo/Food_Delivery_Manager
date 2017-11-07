import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { LoginComponent } from './login/login.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthenticationService} from './authentication.service'
import { AuthGuardService} from './auth-guard.service'
import { AdminGuardService} from './admin-guard.service';
import { CreateClientComponent } from './create-client/create-client.component'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId,
  projectId: masterFirebaseConfig.projectId
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,
    ClientDetailComponent,
    CalendarComponent,
    MapComponent,
    PaymentComponent,
    CreateClientComponent
  ],
  imports: [
    AngularFirestoreModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, AuthenticationService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
