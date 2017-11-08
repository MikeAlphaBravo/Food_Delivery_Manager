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
  edit: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location, private clientService: ClientService, private router: Router) {}


  ngOnInit() {
    // this.client = this.clientService.getClientById()
    this.route.params.forEach((urlParameters) => {
     this.clientId = urlParameters['id'];
   });
   this.clientService.getClientById(this.clientId).subscribe(dataLastEmittedFromObserver => {
     this.clientToDisplay = dataLastEmittedFromObserver;
   })
 }
  //  this.clientToDisplay = this.clientService.getClientById(this.clientId);

  //  this.clientObservable =
  //   this.itemService.getClientById(this.clientId).subscribe(dataLastEmittedFromObserver=>{
  //     this.clientObservable = dataLastEmittedFromObserver;
  //     console.log(this.clientObservable);
  //   });


  beginEditingClient(){
    this.edit = true;
  }

  finishEdit(status){
    this.edit = status;
  }

  beginDeletingClient(id){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.clientService.deleteClient(id);
      this.router.navigate(['clients']);
    }
  }

}
