import { FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightDataService } from './../../services/flight-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor (private _router:Router, private modalService:NgbModal, private _activeR:ActivatedRoute,private _serv:FlightDataService ,private fb:FormBuilder) { }

  ngOnInit(): void {this.getData()
    this.getFlightD()
    // this.BookSubmit()
  }
  from:any
  to:any
  uid:any
  getData(){
    this._activeR.queryParamMap.subscribe((param:any)=>{
       this.uid=param.get('uid')
       this.from=param.get('from')
       this.to=param.get('to')
       console.log(this.uid)
    })
  }
  allFlight:any
  getFlightD(){
    this._serv.getdata(this.uid).subscribe(res=>{
      this.allFlight=res
    })
  }
// Booking
today=new Date
logoFlight:any
getFlogo(data:any){
 this.logoFlight = data
}
bookingForm= this.fb.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  mobileno:['',Validators.required],
  email:['',Validators.required]
})
  BookSubmit(){
    let obj={firstName:this.bookingForm.value.firstName,
    lastName:this.bookingForm.value.lastName,
    mobileno:this.bookingForm.value.mobileno,
    email:this.bookingForm.value.email,
    from:this.from,
    to:this.to,
    price:this.logoFlight.ticketP,
    status:"Active",
     id:''}

    this._serv.postData(obj).subscribe(res=>{
      this.bookingForm.reset()
    })
    this._router.navigate(['mybooking'])
    this.modalService.dismissAll('closed')
  }
  


//modal    ........
closeResult = '';
open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}