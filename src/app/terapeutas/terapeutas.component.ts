import { Component, OnInit } from '@angular/core';
import { Terapeutas } from '../terapeutas';
import { TerapeutasService } from '../terapeutas.service';

@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css']
})
export class TerapeutasComponent implements OnInit {

  public terapeuta!: Terapeutas;

  constructor(private TerapeutasService: TerapeutasService) { }

  ngOnInit(): void {
    this.terapeuta = this.TerapeutasService.getTerapeuta();
  }

}
