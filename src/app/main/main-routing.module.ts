import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"", component:MainComponent,
    loadChildren:()=>import('./../pages/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:"about", component:MainComponent,
    loadChildren:()=>import('./../pages/about/about.module').then(m=>m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
