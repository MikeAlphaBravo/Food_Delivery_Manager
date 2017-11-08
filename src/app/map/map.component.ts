import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Portland';
  lat: number = 45.5231;
  lng: number = -122.6765;

  constructor() { }

  ngOnInit() {
  }

}
