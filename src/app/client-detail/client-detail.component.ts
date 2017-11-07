import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  providers: [ ClientService ]
})
export class ClientDetailComponent implements OnInit {
  clients: Observable<any[]>;
  client;
  clientObservable;
  clientToDisplay;
  clientId;
  constructor(private route: ActivatedRoute, private location: Location, private clientService: ClientService) {}


  ngOnInit() {
    // this.client = this.clientService.getClientById()
    this.route.params.forEach((urlParameters) => {
     this.clientId = urlParameters['id'];
   });
   this.clientToDisplay = this.clientService.getClientById(this.clientId);
  }

}
