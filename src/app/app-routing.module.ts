import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtomShowAllHeroesComponent } from './buttom-show-all-heroes/buttom-show-all-heroes.component';
import { ButtomShowAlignmentComponent } from './buttom-show-alignment/buttom-show-alignment.component';
import { ButtomInitComponent } from './buttom-init/buttom-init.component';
const routes: Routes = [
  {
    path: 'buttom-init',
    component: ButtomInitComponent
  },
  {
    path: 'buttom-show-all-heroes',
    component: ButtomShowAllHeroesComponent
  },
  {
    path: 'buttom-show-alignment',
    component: ButtomShowAlignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
