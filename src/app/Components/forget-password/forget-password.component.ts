import { AuthService } from 'src/app/Sevice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  apiError:string=''
  loading:boolean=false
  ForgetForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required]),
  })

  ForgetPassword(){
    if(this.ForgetForm.valid){
      this.loading=true
      this._AuthService.UserEmail=this.ForgetForm.value
      localStorage.setItem("userEmail",JSON.stringify(this.ForgetForm.value))
      this._AuthService.forgetPassword(this.ForgetForm.value).subscribe({
        next:(response)=>{
          this.loading=false
          Swal.fire(response.message)
          this._Router.navigate(['/reset'])
        },
        error:(error)=>{
          this.loading=false
          this.apiError=error.error.message 
          
        }
      })
    }
  }
}
