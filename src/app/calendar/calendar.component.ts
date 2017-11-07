import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Calendar } from './calendar.model';
import { CalendarService } from '../calendar.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ CalendarService ]
})
export class CalendarComponent implements OnInit {
  calendars: Observable<any[]>;
  meal1;
  meal2;
  meal3;
  meal4;
  constructor(private router: Router, private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendars = this.calendarService.getCalendars();
    // debugger;
  }

  // getDates() {
  //   const curr = new Date;
  //   const first = (curr.getDate() - curr.getDay()) + 2;
  //   const second = (curr.getDate() - curr.getDay()) + 9;
  //   const third = (curr.getDate() - curr.getDay()) + 16;
  //   const fourth = (curr.getDate() - curr.getDay()) + 23;
  //
  //   this.meal1 = new Date(curr.setDate(first));
  //   this.meal2 = new Date(curr.setDate(second));
  //   this.meal3 = new Date(curr.setDate(third));
  //   this.meal4 = new Date(curr.setDate(fourth));
  //   this.clients = this.clientService.getClients();
  // }

  goToDetailPage(clickedClient) {
    this.router.navigate(['calendars/' + clickedCalendar.id]);
  }

  submitForm(meal: string, date: string, clients: string) {
    let newCalendar: Object = ({meal: meal, date: date, clients: clients});
    this.calendarService.createCalendar(newCalendar);
  }
}
