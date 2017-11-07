import { Component } from '@angular/core';
import { masterStripeConfig } from '../api-keys';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [ PaymentService ]
})
export class PaymentComponent {
  photos: any[]=null;
  constructor(private paymentService: PaymentService) { }
  getRoverImages(date: string, camera: string) {
    this.paymentService.getByDateAndCamera(date, camera).subscribe(response => {
        this.photos = response.json();
    });
  }

}
