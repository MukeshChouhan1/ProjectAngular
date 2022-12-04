import { MyBookingComponent } from './my-booking/my-booking.component';
import { SearchComponent } from './search/search.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'flightB', component:FlightBookingComponent},
  {path:'search', component:SearchComponent},
  {path:'mybooking', component:MyBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
