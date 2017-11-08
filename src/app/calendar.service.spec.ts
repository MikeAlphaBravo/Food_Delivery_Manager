import { TestBed, inject } from '@angular/core/testing';

import { Calendar.ServiceService } from './calendar.service.service';

describe('Calendar.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Calendar.ServiceService]
    });
  });

  it('should be created', inject([Calendar.ServiceService], (service: Calendar.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
