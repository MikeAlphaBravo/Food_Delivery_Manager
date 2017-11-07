import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  first;
  second;
  third;
  fourth;
}
  constructor() { }

  ngOnInit() {
    const curr = new Date;
    first = (curr.getDate() - curr.getDay()) + 2;
    second = (curr.getDate() - curr.getDay()) + 9;
    third = (curr.getDate() - curr.getDay()) + 16;
    fourth = (curr.getDate() - curr.getDay()) + 23;

    first = new Date(curr.setDate(first));
    second = new Date(curr.setDate(second));
    third = new Date(curr.setDate(third));
    fourth = new Date(curr.setDate(fourth));
  }

}
