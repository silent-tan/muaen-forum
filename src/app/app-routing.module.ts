import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
