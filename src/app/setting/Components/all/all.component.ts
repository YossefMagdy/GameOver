import { AllGames } from './../../../interface/all-games';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Sevice/games.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  Platform!:string
  length:number=20
  AllGames:AllGames[]=[]
  DisplayGame:AllGames[]=this.AllGames
  searchterm:string=''
  constructor(private _GamesService:GamesService,private spinner:NgxSpinnerService){
   
  }
  ngOnInit(): void {
    this.spinner.show();
   this._GamesService.GetAllGames().subscribe({
    next:(response)=>{
      if(response){
        this.spinner.hide();
      }
      this.AllGames=response
      this.DisplayGame=this.AllGames.slice(0,20)
    },
   })
  }
  Showmore(){
    this.length+=10
    this.DisplayGame=this.AllGames.slice(0,this.length)
 
  }
}
