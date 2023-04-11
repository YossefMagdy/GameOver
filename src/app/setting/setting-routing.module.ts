import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './Components/all/all.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { AuthGuard } from '../Guards/auth.guard';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { GameDetailsComponent } from './Components/game-details/game-details.component';


const routes: Routes = [
  
  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'all',component:AllComponent},
  {path:'platform/:platform',canActivate:[AuthGuard],component:PlatformComponent},
  {path:'sort-by/:Sorted',canActivate:[AuthGuard],component:SortbyComponent},
  {path:'categories/:Categorie',canActivate:[AuthGuard],component:CategoriesComponent},
  { path: 'GameDetails/:id', canActivate: [AuthGuard], component: GameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
