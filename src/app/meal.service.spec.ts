import { TestBed, inject } from '@angular/core/testing';

import { Meal.Service } from './meal.service';

describe('Meal.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Meal.ServiceService]
    });
  });

  it('should be created', inject([Meal.Service], (service: Meal.Service) => {
    expect(meal).toBeTruthy();
  }));
});
