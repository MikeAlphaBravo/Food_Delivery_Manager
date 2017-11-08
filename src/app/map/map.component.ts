import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ MapService ]
})
export class MapComponent implements OnInit {

  constructor(private mapAddress: MapService) { }
  getAddressBySearch(address: string) {
    let test = this.mapAddress.getAddressBySearch(address);
    debugger;
  }
  ngOnInit() {

  }

  testMethod() {
    debugger
  }

}
