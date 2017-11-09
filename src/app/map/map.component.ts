import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../map.service';
import { Client } from '../client.model';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ ClientService ]
})
export class MapComponent implements OnInit {
  clientCoordinates = [];
  clients: Observable<any[]>;
  clientsToDisplay;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientService.getClientCoordinates(this.clientCoordinates);
    this.clients = this.clientService.getClients();

    this.clients.subscribe(dataLastEmittedFromObserver => {
      this.clientsToDisplay = dataLastEmittedFromObserver;
    });
  }

  testMethod() {
    const addresses = [];
    for (let client of this.clientsToDisplay) {
      if (client.data.opt === "true") {
        const address = '+' + (client.data.address).replace(/\s/g, '+') + '+';
        const zip = (client.data.zip) + '/';
        const link = (address + zip);
        addresses.push(link);
      }
    }
    const addressesString = addresses.toString();
    const clientsURL = 'https://www.google.com/maps/dir/' + addressesString;
    window.open(clientsURL);
  }
}
