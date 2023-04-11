import { AuthService } from 'src/app/Sevice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-rest-code',
  templateUrl: './rest-code.component.html',
  styleUrls: ['./rest-code.component.css']
})
export class RestCodeComponent {
  UserEmail:any
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem("userEmail")!=null){
      this.UserEmail=JSON.parse(localStorage.getItem('userEmail') || '{}')
    }
  }
  apiError:string=''
  loading:boolean=false
  ResetCode:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required]),

  })

  VerifyCode(){
    if(this.ResetCode.valid){
      this.loading=true;
     this._AuthService.ResetCode(this.ResetCode.value).subscribe({
      next:(Response)=>{
        if(Response.status='Success'){
          this.loading=false;
          Swal.fire({icon: 'success'})
          this._Router.navigate(['/ChangePassword'])
          console.log(Response.status)
        }
      },
      error:(error)=>{
        this.loading=false;
        this.apiError=error.error.message
        Swal.fire(error.error.message)
      }
     })
    }
  }
  SendCodeAgain(){
    this._AuthService.forgetPassword(this.UserEmail).subscribe({
      next:(response)=>{
        
        Swal.fire(response.message)
      }
  })
}
}
