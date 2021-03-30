import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  estados:any = []
  constructor(private EstadosService:EstadosService) { }

  ngOnInit(): void {
    this.EstadosService.getEstados().subscribe((response) => {
      this.estados = response
    });

  }

}
