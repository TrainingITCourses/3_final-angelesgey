import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'launch/:status',
    loadChildren:'./launch/launch.module#LaunchModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
