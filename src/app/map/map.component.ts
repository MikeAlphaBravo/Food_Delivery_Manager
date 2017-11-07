import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

//javascript from google map api
function initMap() {
  let uluru = {lat: -25.363, lng: 131.044};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  let marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
