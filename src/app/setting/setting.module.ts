import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchPipe } from './search.pipe';
import { SettingRoutingModule } from './setting-routing.module';
import { FormsModule } from '@angular/forms';
import { AllComponent } from './Components/all/all.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import {RouterModule,Route} from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GameDetailsComponent } from './Components/game-details/game-details.component';

@NgModule({
  declarations: [
    AllComponent,
    SearchPipe,
    PlatformComponent,
    SortbyComponent,
    CategoriesComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule,
    CarouselModule
  ]
})
export class SettingModule { }
