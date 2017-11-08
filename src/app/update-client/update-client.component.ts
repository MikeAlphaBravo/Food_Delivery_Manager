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
  @Input() showEdit = false;
  @Input() hideOpt = true;
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();
  message: string;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingClient(clientToUpdate, id){
    this.clientService.updateClient(clientToUpdate, id).then(() => {
      this.message = "Client Updated"
      this.clickSender2.emit(this.message)
      this.clickSender.emit(null)
    })
    .catch(function(error) {
      this.message = "error: " + error
      this.clickSender2.emit(this.message)
    });
    this.showEdit = false;
    this.hideOpt = true;
  }

  beginUpdatingOpt(clientToUpdate, id){
    this.clientService.updateOpt(clientToUpdate, id).then(() => {
      this.message = "Opt Status Updated."
      this.clickSender2.emit(this.message)
      this.clickSender.emit(null)
    })
    .catch(function(error) {
      this.message = "error: " + error
      this.clickSender2.emit(this.message)
    });
  }

}
