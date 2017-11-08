import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterMapConfig, masterFirebaseConfig} from './api-keys';
import { LoginComponent } from './login/login.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { MapComponent } from './map/map.component';
import { PaymentComponent } from './payment/payment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthenticationService} from './authentication.service';
import { AuthGuardService} from './auth-guard.service';
import { AdminGuardService} from './admin-guard.service';
import { CreateClientComponent } from './create-client/create-client.component';
import { CalendarService} from './calendar.service';


import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { UpdateClientComponent } from './update-client/update-client.component';

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
    CreateClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    AngularFirestoreModule,
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: masterMapConfig.apiKey
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    AdminGuardService,
    CalendarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
