import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;
  constructor(private database: AngularFirestore) {
    this.clients = database.collection('clients').valueChanges();
  }

  getClients(){
    return this.clients;
  }

  getClientById(clientId: string){
    return this.database.doc('clients/'+clientId).valueChanges();
  }

}
