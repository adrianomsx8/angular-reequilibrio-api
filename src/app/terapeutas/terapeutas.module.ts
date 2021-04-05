import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapeutasComponent } from './terapeutas.component';
import { TerapeutasRoutingModule } from './terapeutas.routing.module';
import { TerapeutaCadastroComponent } from './cadastro/terapeuta-cadastro.component';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [TerapeutasComponent, TerapeutaCadastroComponent],
  imports: [
    CommonModule,
    TerapeutasRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule
  ]
})
export class TerapeutasModule { }
