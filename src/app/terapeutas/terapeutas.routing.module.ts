import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerapeutaCadastroComponent } from './cadastro/terapeuta-cadastro.component';
import { TerapeutasComponent } from './terapeutas.component';

const routes: Routes = [
  {
    path: '',
    component : TerapeutasComponent
  },
  {
    path: 'add',
    component : TerapeutaCadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerapeutasRoutingModule { }
