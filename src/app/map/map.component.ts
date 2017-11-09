import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../map.service';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ ClientService ]
})
export class MapComponent implements OnInit {
clientCoordinates = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientCoordinates(this.clientCoordinates);
  }

  testMethod() {
    debugger;
  }
}
