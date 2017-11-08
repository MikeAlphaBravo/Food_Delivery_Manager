import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
  providers: [ClientService]
})

export class UpdateClientComponent implements OnInit {
  @Input() selectedClient;
  @Input() clientId;
  @Output() clickSender = new EventEmitter();

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingClient(clientToUpdate, id){
    console.log(id)
    console.log(clientToUpdate)
    this.clientService.updateClient(clientToUpdate, id);
    this.clickSender.emit(null)
  }

}
