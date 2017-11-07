import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [ ClientService ]
})
export class ClientListComponent implements OnInit {
  clients: Observable<any[]>;
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {

    this.clients = this.clientService.getClients();
  }

  goToDetailPage(clickedClient) {
   this.router.navigate(['clients' + clickedClient.id]);
 };

}
