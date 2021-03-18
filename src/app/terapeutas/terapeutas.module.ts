import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapeutasComponent } from './terapeutas.component';
import { TerapeutasRoutingModule } from './terapeutas.routing.module';



@NgModule({
  declarations: [TerapeutasComponent],
  imports: [
    CommonModule,
    TerapeutasRoutingModule
  ]
})
export class TerapeutasModule { }
