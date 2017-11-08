import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Calendar } from './calendar.model';
import { CalendarService } from '../calendar.service';
import { ClientService } from '../client.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ CalendarService, ClientService ]
})
export class CalendarComponent implements OnInit {
  calendars: Observable<any[]>;
  clients: Observable<any[]>;

  constructor(private router: Router, private calendarService: CalendarService, private clientService: ClientService) { }

  ngOnInit() {
    this.calendars = this.calendarService.getCalendars();
    this.clients = this.clientService.getClients();

    this.clients.subscribe(dataLastEmittedFromObserver => {
    this.clientsToDisplay = dataLastEmittedFromObserver;
  });
  }

  goToDetailPage(clickedClient) {
    this.router.navigate(['calendars/' + clickedCalendar.id]);
  }

  submitForm(meal: string, date: string, clients: string) {
    const clientList = clients.split(',');
    const clientListAll = [];
    (this.clientsToDisplay).forEach(function(client) {
      clientListAll.push(client.data.name)
    });
    let newCalendar: Object = ({meal: meal, date: date, clients: clientList});
    // debugger;
    this.calendarService.createCalendar(newCalendar);
  }
}
