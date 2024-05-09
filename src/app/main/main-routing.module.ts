import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"", component:MainComponent,

    children:[
      { path:"",
        loadChildren:()=>import('./../pages/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:"about",
        loadChildren:()=>import('./../pages/about/about.module').then(m=>m.AboutModule),
      },
      {
        path:"login",
        loadChildren:()=>import('./../pages/login/login.module').then(m=>m.LoginModule),

      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
