import { FlightDataService } from './../../services/flight-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {

  constructor(private _servicef:FlightDataService) { }

  ngOnInit(): void { 
    this.getMybookingServer()
    this.getbookingCanl();
    this.getbookingComplete()
  }
  mybookingData:any;
  getMybookingServer(){
    this._servicef.getMybooking().subscribe(res =>{
      this.mybookingData=res;
      console.log(res)
    })
  }
  mybookingCanl:any
  getbookingCanl(){
    this._servicef.getMybookingCanl().subscribe(res =>{
      this.mybookingCanl=res
    })
  }
  mybookingComplete:any
  getbookingComplete(){
    this._servicef.getMybookingComplete().subscribe(res =>{
      this.mybookingComplete=res
    })
  }
}