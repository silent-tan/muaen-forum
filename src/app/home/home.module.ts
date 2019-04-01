import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArticleCardComponent } from 'app/components/article-card/article-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ArticleCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
