import { Component, OnInit } from '@angular/core';
import { masterStripeConfig } from '../api-keys'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor() { }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: masterStripeConfig,
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });
  }
}
