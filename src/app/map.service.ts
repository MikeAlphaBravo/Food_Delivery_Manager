import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {
  constructor(private http: Http) {}
  addresses: any[]=null;

  getAddressBySearch(address: string) {
    let newAddress = address.replace(" ","+")
    let call = this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + newAddress).subscribe(response => {
      this.addresses = response.json();
    });
    debugger;
    return call;
  }
}
