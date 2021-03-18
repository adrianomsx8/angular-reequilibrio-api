import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerapeutasComponent } from './terapeutas.component';

const routes: Routes = [
  {
    path: '',
    component : TerapeutasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapeutasRoutingModule { }
