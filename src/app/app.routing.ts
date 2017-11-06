import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent }   from './payment/payment.component';
import { ClientListComponent }   from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { MapComponent }   from './map/map.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
