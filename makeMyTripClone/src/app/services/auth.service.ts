import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http:HttpClient) { }
  url='http://localhost:3000/userDetails'
  getUserD(){
    return this._http.get(this.url)
  }
  saveUserD(obj:any){
   return this._http.post(this.url,obj)
  }
}
