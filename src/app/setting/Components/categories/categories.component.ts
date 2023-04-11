import { AllGames } from './../../../interface/all-games';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/Sevice/games.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  Category!:any
  AllGames:AllGames[]=[]
  DisplayGame:AllGames[]=[]
  length:number=20
  constructor(private _activatedRoute: ActivatedRoute,private _GamesService:GamesService,private spinner:NgxSpinnerService) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.Category=params.get('Categorie')
        this.ngOnInit();
    });
}

ngOnInit() {
  this.spinner.show();
    this.getData();
    // Do something else
}

getData() {
    this._GamesService.Categories(this.Category).subscribe({
      next:(Response)=>{
        if(Response){
          this.spinner.hide();
        }
        this.AllGames=Response
        this.DisplayGame=this.AllGames.slice(0,this.length)
        
      },
    })
}
Showmore(){
  this.length+=10
  this.DisplayGame=this.AllGames.slice(0,this.length)
  console.log(this.AllGames.slice(0,this.length))
  console.log(this.DisplayGame)
}
}
