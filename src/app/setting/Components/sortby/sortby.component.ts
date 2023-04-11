import { AllGames } from './../../../interface/all-games';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/Sevice/games.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent {
  length:number=20
  DisplayGame:AllGames[]=[]
  Sorted!:any
  AllGames:AllGames[]=[]
  constructor(private _activatedRoute: ActivatedRoute,private _GamesService:GamesService,private spinner:NgxSpinnerService) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.Sorted=params.get('Sorted')
        this.ngOnInit();
    });
}

ngOnInit() {
  this.spinner.show();
    this.getData();
    // Do something else
}

getData() {
    this._GamesService.SortBy(this.Sorted).subscribe({
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
