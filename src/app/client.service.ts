import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;

  constructor(private database: AngularFirestore) {
   this.clients = database.collection('clients').snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Client;
         const id = a.payload.doc.id;
         return{ id, data };
       })
     })
 }

  // constructor(private database: AngularFirestore) {
  //   this.clients = database.collection('clients').valueChanges();
  // }

  getClients(){
    return this.clients;
  }

  getClientById(clientId: string){
    return this.database.doc('clients/'+clientId).valueChanges();
  }
}
