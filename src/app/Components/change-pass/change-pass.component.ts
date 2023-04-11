import { AuthService } from 'src/app/Sevice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnDestroy{
  UserEmail:any
  constructor(private _AuthService:AuthService,private _Router:Router){
    this.ChangePass.get('email')?.disable()
    this.UserEmail=JSON.parse(localStorage.getItem('userEmail') || '{}')
    console.log(this.UserEmail.email)
  }
  ngOnDestroy(): void {
    localStorage.removeItem('userEmail')
  }
  apiError:string=''
  loading:boolean=false
  ChangePass:FormGroup=new FormGroup({
    email:new FormControl(JSON.parse(localStorage.getItem('userEmail') || '{}').email,[Validators.required]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),

  })

  Changepassword(){
    this.ChangePass.get('email')?.enable()
    if(this.ChangePass.valid){
      this.loading=true
      
     this._AuthService.ChangePassword(this.ChangePass.value).subscribe({
      next:(Response)=>{
        this.loading=false
        this.ChangePass.get('email')?.disable()
        Swal.fire({icon: 'success'})
        this._Router.navigate(['/Login'])
      },
      error:(error)=>{
        this.loading=false
        this.ChangePass.get('email')?.disable()
        this.apiError=error.error.message
        Swal.fire(error.error.message)
      }
     })
    }
  }

}
