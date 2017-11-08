import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';
import { ClientService } from '../client.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [ MealService, ClientService ]
})
export class MealComponent implements OnInit {
  meals: Observable<any[]>;
  clients: Observable<any[]>;
  clientsToDisplay;

  constructor(private router: Router, private mealService: MealService, private clientService: ClientService) { }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
    this.clients = this.clientService.getClients();

    this.clients.subscribe(dataLastEmittedFromObserver => {
    this.clientsToDisplay = dataLastEmittedFromObserver;
  });
  }



  submitForm(meal: string, date: string, clients: string) {
    const clientList = clients.split(',');
    const clientListAll = [];
    (this.clientsToDisplay).forEach(function(client) {
      clientListAll.push(client.data.name);
    });
    const newMeal: Object = ({meal: meal, date: date, clients: clientList});
    this.mealService.createMeal(newMeal);
  }
}
