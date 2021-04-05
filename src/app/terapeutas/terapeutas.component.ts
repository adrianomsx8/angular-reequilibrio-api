import { Component, OnInit } from '@angular/core';
import { Terapeuta } from '../terapeuta';
import { TerapeutaService } from '../terapeuta.service';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css'],
  providers:[ConfirmationService]
})
export class TerapeutasComponent implements OnInit {

  public terapeutas: Terapeuta[] = [];

  constructor(private TerapeutaService: TerapeutaService, 
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    //this.terapeutas = this.TerapeutaService.listaTerapeuta();
    this.listaTerapeuta()
  }

  public listaTerapeuta(){
    this.TerapeutaService.listaTerapeuta().subscribe(
      response => {
        this.terapeutas = response
      },
      error => {
        alert('ocorreu um erro ao listar');
      }
    )
  }

  public deletar(id:string){
 
      this.confirmationService.confirm({
          message: 'Confirmar exclusão?',
          accept: () => {
            this.TerapeutaService.delete(id).subscribe(
              response => {
               this.listaTerapeuta()
              }
            )
          }
      });    
    }
}
