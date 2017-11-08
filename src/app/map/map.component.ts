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
    // function initMap() {
    //     var uluru = {lat: -25.363, lng: 131.044};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 4,
    //       center: uluru
    //     });
    //   }
  }

}
