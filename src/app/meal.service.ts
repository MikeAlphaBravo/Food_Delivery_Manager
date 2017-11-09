import { Injectable } from '@angular/core';
import { Meal } from './meal.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class MealService {
  meals: Observable<any[]>;
  mealCollection: AngularFirestoreCollection<Meal>;

  constructor(private database: AngularFirestore) {
   this.meals = database.collection('meals').snapshotChanges()
     .map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data() as Meal;
         const id = a.payload.doc.id;
         return{ id, data };
       });
     });
  }

  getMealsByDate(){
    return this.database.collection('meals' ref => ref.orderBy('date')).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Meal;
        const id = a.payload.doc.id;
        return{ id, data };
      })
    });
  }

  getMeals() {
    return this.meals;
  }

  getMealById(mealId: string) {
    return this.database.doc('meals/' + mealId).valueChanges();
  }
  createMeal(meal) {
    return this.database.collection('meals').add(meal);
  }
}
