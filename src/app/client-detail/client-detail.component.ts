import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';


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
  constructor(private router: Router, private clientService: ClientService) {}


  ngOnInit() {
    // this.client = this.clientService.getClientById()

  }

}
