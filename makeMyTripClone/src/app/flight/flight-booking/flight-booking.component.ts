import { Router } from '@angular/router';
import { FlightDataService } from './../../services/flight-data.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent implements OnInit {
  constructor(private fb:FormBuilder, private _service:FlightDataService,private _router:Router) { }
  ngOnInit(): void { this.getUserInfo()}
  locationCity= this.fb.group({
    from:['Nagpur'],
    to:['Mumbai']
  })

serverflightD:any;
getUserInfo(){
  this._service.getFlightD().subscribe(res=>{
    // console.log(res)
    this.serverflightD=res
  })
}
showFlighttime(){
  this.serverflightD.find((el:any)=>{
    if(el.from == this.locationCity.value.from && el.to == this.locationCity.value.to){
    this._router.navigate(['search'],{queryParams:{uid:el.id,from:el.from,to:el.to}})
    }
  })
}

}

