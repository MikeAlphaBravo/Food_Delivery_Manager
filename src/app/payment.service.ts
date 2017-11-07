import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { masterStripeConfig } from './api-keys'

@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  getByDateAndCamera(date: string, camera: string) {
    let test = this.http.get("https://api.stripe.com/v1/charges?&key=sk_test_t9nfysA6WvPPWmqqLCGAwGs9")
    console.log(test);
    return test;
  }

}
