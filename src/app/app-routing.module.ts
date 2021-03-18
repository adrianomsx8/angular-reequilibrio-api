import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    //loadChildren : './home/home.module#HomeModule'
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'terapeutas',
   // loadChildren : './terapeutas/terapeutas.module#TerapeutasModule'
   loadChildren: () => import('./terapeutas/terapeutas.module').then(m => m.TerapeutasModule)
  },
  {
    path : '', 
    pathMatch: 'full',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
