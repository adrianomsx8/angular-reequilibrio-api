import { Component, OnInit } from '@angular/core';
import { Terapeuta } from '../terapeuta';
import { TerapeutaService } from '../terapeuta.service';

@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css']
})
export class TerapeutasComponent implements OnInit {

  public terapeutas: Terapeuta[] = [];

  constructor(private TerapeutaService: TerapeutaService) { }

  ngOnInit(): void {
    //this.terapeutas = this.TerapeutaService.listaTerapeuta();
    this.TerapeutaService.listaTerapeuta().subscribe(
      response => {
        this.terapeutas = response
      },
      error => {
        alert('ocorreu um erro ao listar');
      }
    )
  }

}
