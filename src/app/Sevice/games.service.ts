import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient:HttpClient) { }
  
  GetAllGames():Observable<any>{
  return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
    headers : {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  })
  }
  GameDetails(id:number):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
    headers : {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  })
  }
  Platform(Platform:string):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${Platform}`,{
    headers : {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  })
  }
  SortBy(Sorted:string):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${Sorted}`,{
    headers : {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  })
  }
  Categories(Categorie:string):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Categorie}`,{
    headers : {
      'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
  })
  }
}
