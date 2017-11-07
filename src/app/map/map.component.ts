import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Client Map';
  lat: number = 45.5231;
  lng: number = -122.6765;

  constructor() { }

  ngOnInit() {
  }
}
