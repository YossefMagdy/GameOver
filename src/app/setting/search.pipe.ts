import { Pipe, PipeTransform } from '@angular/core';
import { AllGames } from './../interface/all-games';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Games:AllGames[],searchTerm:string): AllGames[] {
    return Games.filter((games)=>{
    return  games.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
