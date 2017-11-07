import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent }   from './payment/payment.component';
import { ClientListComponent }   from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { MapComponent }   from './map/map.component';
import { AuthGuardService } from './auth-guard.service'
import { AdminGuardService} from './admin-guard.service'
import { CreateClientComponent} from './create-client/create-client.component'

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'client/:id',
    component: ClientDetailComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'create',
    component: CreateClientComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
