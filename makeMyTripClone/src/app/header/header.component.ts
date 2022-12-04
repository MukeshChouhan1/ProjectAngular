import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor( private _service:AuthService, private fb:FormBuilder, private _router:Router,private modalService:NgbModal) { }
  
  ngOnInit(): void {
    this.getUserInfo()
    console.log(this.serverData)
    // this.submitUserD()
  }
 
  Register(){
    this._router.navigate(['register'])
  }
  logInForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    username:['',Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
    password:['',Validators.required]
  })
  serverData:any;
  getUserInfo(){
    this._service.getUserD().subscribe(res =>{
      this.serverData=res 
    })
  }
  
  showToast:any
  ToastFail:any
  RegToast:any
  fName:any
  // logInSubmit(){
  //   let userfound = this.serverData.filter((el:any)=>{
  //     return (el.username == this.logInForm.value.username && el.password == this.logInForm.value.password)
  //   })
  //   if(userfound.length>0){
  //     sessionStorage.setItem('Active','true')
  //     this.condition= sessionStorage.getItem('Active') == 'true'
  //     this.showToast=true;
  //     this.modalService.dismissAll('closed')
  //   }else{
  //      this.ToastFail=true
  //   }
  // }
  condition:any
  logInSubmit(){
     this.serverData.filter((el:any)=>{
      if (el.username == this.logInForm.value.username && el.password == this.logInForm.value.password) {
      this.fName=el.firstName
      this.showToast=true;
      localStorage.setItem('Active','true')
      this.condition= localStorage.getItem('Active') == 'true'
      this.logInForm.reset() 
      this.modalService.dismissAll('closed')
    }
    })
       this.ToastFail=true
  }

  logOut(){
  this.condition= localStorage.clear()
  this.ToastFail=false;
  this.showToast=false;
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

//********** *   register form********//
  get f(){
    return this.registerForm.controls
  }
  pass:any;
  cpass:any;
 registerForm= this.fb.group ({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     username:['',Validators.required,Validators.email],
     password:['',Validators.required,Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')],
     conpassword:['',Validators.required]
  })

 

  submitUserD(){
    let obj = {
    firstName:this.registerForm.value.firstName,
    lastName:this.registerForm.value.lastName,
    username:this.registerForm.value.username,
    password:this.registerForm.value.password,
    id:''
    }
  this._service.saveUserD(obj).subscribe(res=>{
    this.registerForm.reset() 
  })
    this.RegToast=true
  }


}












// {  Validators:this.mustMatch('password','conpassword'),}
// mustMatch(password:any,conpassword:any){
//   return (formGroup:FormGroup)=>{
//     const passwordcontrol=formGroup.controls['password']
//     const conpasswordcontrol=formGroup.controls['conpassword']

//     if(conpasswordcontrol.errors && ! conpasswordcontrol.errors['mustMatch']){
//       return;
//     }
//     if(passwordcontrol.value !== conpasswordcontrol.value['mustMatch']){
//       conpasswordcontrol.setErrors({mustMatch:true});
//     }else{
//       conpasswordcontrol.setErrors(null)
//     }
//   }
// }