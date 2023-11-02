import { AuthService } from 'src/app/Sevice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    
  }
  apiError:string=''
  loading:boolean=false
  LoginForm:FormGroup=new FormGroup({
    email:new FormControl('demo@gmail.com',[Validators.required]),
    password:new FormControl('Y@123456',[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)])
  })

  HandleLogin(){
    if(this.LoginForm.valid){
      this.loading=true
      this._AuthService.Login(this.LoginForm.value).subscribe({
        next:(response)=>{
          localStorage.setItem('userToken',response.token)
          this.loading=false
          this._AuthService.decoded()
          this._Router.navigate(['/home'])
        },
        error:(error)=>{
          this.loading=false
          this.apiError=error.error.message
        }
      })
    }
  }
}
