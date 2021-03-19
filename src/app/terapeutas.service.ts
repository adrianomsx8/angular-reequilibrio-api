import { Injectable } from '@angular/core';
import { Terapeutas } from './terapeutas';

@Injectable({
  providedIn: 'root'
})
export class TerapeutasService {

  constructor() { }

  public getTerapeuta(): Terapeutas {
    let terapeuta = new Terapeutas();
    terapeuta.nome = "Adriano";
    terapeuta.email = "adriano.msx8@gmail.com";
    
    return terapeuta;
  }
}
