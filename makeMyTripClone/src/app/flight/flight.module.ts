import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { SearchComponent } from './search/search.component';
import { MyBookingComponent } from './my-booking/my-booking.component';


@NgModule({
  declarations: [
    FlightBookingComponent,
    SearchComponent,
    MyBookingComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FlightModule { }
