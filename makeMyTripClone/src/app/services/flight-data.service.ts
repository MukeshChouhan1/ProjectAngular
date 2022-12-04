import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightDataService {
  constructor(private _http: HttpClient) {}
  getFlightD() {
    return this._http.get('http://localhost:3000/cityWiseFlight');
  }
  url = 'http://localhost:3000/cityWiseFlight?id=';
  getdata(id: any) {
    return this._http.get(this.url + id);
  }
  postData(obj: any) {
    return this._http.post('http://localhost:3000/mybooking', obj);
  }
  getMybooking() {
    return this._http.get('http://localhost:3000/mybooking');
  }
  getMybookingCanl() {
    return this._http.get('http://localhost:3000/cancelled');
  }
  getMybookingComplete() {
    return this._http.get('http://localhost:3000/complete');
  }
}
