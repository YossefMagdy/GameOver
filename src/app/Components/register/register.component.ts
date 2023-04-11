import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Sevice/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  apiError:string=''
  loading:boolean=false
  constructor(private _AuthService:AuthService,private _Router:Router){

  }
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)])
  },{validators:this.passwordMatch})

  passwordMatch(registerForm:any):any{
    let password=registerForm.get('password')
    let repassword=registerForm.get('rePassword')
    if(password.value==repassword.value){
      return null
    }else{
      repassword.setErrors({passwordMatch:'password and repassword dont match'})
      return {passwordMatch:'password and repassword dont match'}
    }
  }
  
  handleRegister(){
    this.loading=true
    if(this.registerForm.valid){
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(response)=>{
          if(response.message=='success'){
            this.loading=false
            this._Router.navigate(['/Login'])
            }
          
        },
        error:(error)=>{
          this.loading=false
          this.apiError=error.error.message
        }
      })
    }
  }
}
  
