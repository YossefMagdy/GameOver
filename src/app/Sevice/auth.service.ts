import { Login } from './../interface/login';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from '../Enviroment/enviroment';

import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null)
  UserEmail:any
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken')!=null){
      this.decoded()
  }
  if(localStorage.getItem('userEmail')!=null){
    this.UserEmail=JSON.parse(localStorage.getItem('userEmail') || '{}')
}

    
  }
  register(userData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'signup',userData)
  }
  Login(userData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'signin',userData)
  }
  forgetPassword(userData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'forgotPasswords',userData)
  }
  decoded(){
    let encoded=JSON.stringify(localStorage.getItem('userToken'))
    let decoded:any=jwtDecode(encoded)
    this.userData.next(decoded)
  }
  logout(){
    localStorage.removeItem('userToken') 
    this.userData.next(null)
    this._Router.navigate(['/Login'])
  }
  ResetCode(userData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'verifyResetCode',userData)
  }
  ChangePassword(userData:object):Observable<any>{
    return this._HttpClient.put(Enviroment.BaseUrl+'resetPassword',userData)
  }
}
