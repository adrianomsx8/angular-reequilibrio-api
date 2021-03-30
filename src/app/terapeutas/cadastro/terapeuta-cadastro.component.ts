import { Component, OnInit } from '@angular/core';
import { Terapeuta } from 'src/app/terapeuta';
@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeuta-cadastro.component.html',
  styleUrls: ['./terapeuta-cadastro.component.css']
})
export class TerapeutaCadastroComponent implements OnInit {


  public terapeuta:Terapeuta = new Terapeuta()
  constructor() { }

  ngOnInit(): void {
  
  }

  public salvar(){
      console.log(this.terapeuta);
      alert('salvo com sucesso');
  }

}
