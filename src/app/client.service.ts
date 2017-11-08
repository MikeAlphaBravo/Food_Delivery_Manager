import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;
  message: string;

  constructor(private database: AngularFirestore ) {
   this.clients = database.collection('clients').snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Client;
         const id = a.payload.doc.id;
         return{ id, data };
       });
     });
 }

  getClients() {
    return this.clients;
  }

  getClientById(clientId: string) {
    return this.database.doc('clients/' + clientId).valueChanges();
  }

  createClient(client) {
    return this.database.collection('clients').add(client);
  }
  updateClient(localUpdateClient, id) {
    console.log(id);
    const clientEntryInFirebase = this.database.collection('clients').doc(id);
    return clientEntryInFirebase.update({name: localUpdateClient.name,
                                  address: localUpdateClient.address,
                                  zip: localUpdateClient.zip,
                                  account: localUpdateClient.account,
                                  statement: localUpdateClient.statement,
                                  phone: localUpdateClient.phone,
                                  carrier: localUpdateClient.carrier,
                                  plan: localUpdateClient.plan,
                                  email: localUpdateClient.email,
                                  allergies: localUpdateClient.allergies,
                                  delivery: localUpdateClient.delivery,
                                  payment: localUpdateClient.payment,
                                  opt: localUpdateClient.opt});
  }

  deleteClient(id) {
    this.database.collection('clients').doc(id).delete();
  }

  updateOpt(clientToUpdate, id){
    let clientEntryInFirebase = this.database.collection('clients').doc(id);
    console.log(clientEntryInFirebase)
    return clientEntryInFirebase.update({opt: clientToUpdate.opt});
  }
}
