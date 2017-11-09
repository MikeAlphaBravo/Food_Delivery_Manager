import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;
  message: string;
  test: any;

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

  getClientCoordinates(coordinateArray) {
  let clientAddressQueries = [];
  this.clients.subscribe( (resClients) => {
    let output = [];
    (resClients).forEach(function(client) {
      let street = client.data.address;
      let zip = client.data.zip;
      let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+street+' '+zip+'&key=AIzaSyBmEfAFGu4YQ0uBxjJDPRxa98w5RTCmkKg';
      let name = client.data.name;
      clientAddressQueries.push([name ,url]);

    });
    for(let i in clientAddressQueries){
      this.getLatAndLng(clientAddressQueries[i][0], clientAddressQueries[i][1], coordinateArray);
    }
  });
}

getLatAndLng( name, url, coordinateArray ){
   let request = new XMLHttpRequest();
   let output = [];
   request.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       let response = JSON.parse(this.responseText);
       let latitude = response.results[0].geometry.location.lat;
       let longitude = response.results[0].geometry.location.lng;
       output.push([latitude, longitude]);
       coordinateArray.push([name, latitude, longitude]);
     }
   };
   request.open("GET", url, true);
   request.send();
 }
}
