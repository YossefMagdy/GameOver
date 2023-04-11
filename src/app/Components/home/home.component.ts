import { AllGames } from './../../interface/all-games';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Sevice/games.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllGames:AllGames[]=[]
  constructor(private _GamesService:GamesService,private spinner:NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show();
   this._GamesService.SortBy('popularity').subscribe({
    next:(response)=>{
      if(response){
        this.spinner.hide();
      }
      this.AllGames=response
      
    },
    
   })

  }
}
