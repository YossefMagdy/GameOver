import { GameDetails } from './../../../interface/game-details';
import { GamesService } from 'src/app/Sevice/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
clip:any = document.querySelector(".vid")
ObjectExist:boolean=false
productId!:any
videolink:string=''
backgroundimage:string=''
DReady:boolean=false
GameDetails!:GameDetails
  constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService,private _Router:Router,private spinner:NgxSpinnerService){
    _ActivatedRoute.paramMap.subscribe((Response)=>{
      this.productId=Response.get('id')
    })
    
  }
  ngOnInit(): void {

    this.spinner.show();
    this._GamesService.GameDetails(this.productId).subscribe({
      next:(response)=>{
       if(response){
        this.spinner.hide();
       }
       this.DReady=true
        this.GameDetails=response
        this.videolink=`https://www.freetogame.com/g/${response.id}/videoplayback.webm`
        // this.backgroundimage=`url(https://www.freetogame.com/g/${response.id}/background.jpg  )`
        this.backgroundimage=`linear-gradient(rgba(39,43,48,.9),#272b30),url(https://www.freetogame.com/g/${response.id}/background.jpg  )`
       console.log(response)
        if(typeof this.GameDetails.minimum_system_requirements !='undefined'){
          this.ObjectExist=true
        }else{
          this.ObjectExist=false
        }
      }
      
     

    })
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    
  }
  GotoPage(Url:any){
    window.open(Url)
  
  }
}
