import { Component, OnInit } from '@angular/core';
import { Terapeuta } from 'src/app/terapeuta';
import { TerapeutaService } from 'src/app/terapeuta.service';
@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeuta-cadastro.component.html',
  styleUrls: ['./terapeuta-cadastro.component.css']
})
export class TerapeutaCadastroComponent implements OnInit {


  public terapeuta:Terapeuta = new Terapeuta()
  constructor(private terapeutaService:TerapeutaService) { }

  ngOnInit(): void {
  
  }

  public salvar(){
      this.terapeutaService.salvar(this.terapeuta).subscribe(
        response => {
          alert('salvo com sucesso');
        },
        error => {
          alert('Ocorreu um erro ao salvar');
        }
      )
      
  }

}
