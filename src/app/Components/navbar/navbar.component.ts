import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Sevice/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Islogin:boolean=false
constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue()!=null){
          this.Islogin=true
        }else{
          this.Islogin=false
        }
      }
    })
  }
  logout(){
    this._AuthService.logout()
  }
  

}
