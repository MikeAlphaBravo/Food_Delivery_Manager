import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  providers: [ ClientService ]
})
export class CreateClientComponent implements OnInit {
  message: string;
  constructor(private clientService: ClientService) { }

  submitForm(name: string, address: string, zip: number, phone: string, carrier: string, plan: string, email: string, allergies: string, delivery: string, payment: string) {
    let newClient: Object= ({name: name, address: address, zip: zip, account: 0, statement: 0, phone: phone, carrier: carrier, plan: plan, email: email, allergies: allergies, delivery: delivery, payment: payment, opt: true});
    this.clientService.createClient(newClient).then(() => {
      this.message = "Client Added"
    })
    .catch(function(error) {
      this.message = "error: " + error
    });

  }

  ngOnInit() {
  }

}
