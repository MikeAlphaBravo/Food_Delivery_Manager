import { Injectable } from '@angular/core';
import { Calendar } from './calendar.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class CalendarService {
  calendars: Observable<any[]>;

  constructor(private database: AngularFirestore) {
   this.calendars = database.collection('calendars').snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Calendar;
         const id = a.payload.doc.id;
         return{ id, data };
       });
     });
  }

  getCalendars() {
    return this.calendars;
  }

  getCalendarById(calenderID: string) {
    return this.database.doc('calendars/' + calendarId).valueChanges();
  }

  createCalendar(calendar) {
    return this.database.collection('calendars').add(calendar);
  }
}
