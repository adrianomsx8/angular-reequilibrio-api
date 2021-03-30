import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapeutasComponent } from './terapeutas.component';
import { TerapeutasRoutingModule } from './terapeutas.routing.module';
import { TerapeutaCadastroComponent } from './cadastro/terapeuta-cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TerapeutasComponent, TerapeutaCadastroComponent],
  imports: [
    CommonModule,
    TerapeutasRoutingModule,
    FormsModule
  ]
})
export class TerapeutasModule { }
