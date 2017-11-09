import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
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
  mealsDate: Observable<any[]>;
  clientsToDisplay;
  selectedMeal;
  showWeek = false;
  showBiweek1 = false;
  showBiweek2 = false;

  constructor(private router: Router, private mealService: MealService, private clientService: ClientService) { }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
    this.clients = this.clientService.getClients();
    this.mealsDate = this.mealService.getMealsByDate();
  };

  submitForm(meal: string, date: string) {
    const newMeal: Object = ({meal: meal, date: date});
    this.mealService.createMeal(newMeal);
  }

  showMeal(meal){
    if(meal === "weekly"){
      this.showWeek = true;
      this.showBiweek1 = false;
      this.showBiweek2 = false;
    }else if(meal === "biweekly1"){
      this.showBiweek1 = true;
      this.showWeek = false;
      this.showBiweek2 = false;
    }else if(meal === "biweekly2"){
      this.showBiweek2 = true;
      this.showWeek = false;
      this.showBiweek1 = false;
    }
  }
}