import { Injectable } from '@angular/core';
import { Terapeuta } from './terapeuta';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  constructor() { }

  public getTerapeuta(): Terapeuta {
    let terapeuta = new Terapeuta();
    terapeuta.nome = "Adriano";
    terapeuta.email = "adriano.msx8@gmail.com";
    
    return terapeuta;
  }

 public listaTerapeuta(): Terapeuta[] {

  return [
      {
        nome : "Adriano",
        email: "adriano.msx8@gmail.com"
      },
      {
        nome : "Maria",
        email: "maria.paiva@gmail.com"
      },
      {
        nome : "Laura",
        email: "laura.paiva@gmail.com"
      },
      {
        nome : "Joaquim",
        email: "joaquim.santos@gmail.com"
      }
    ];

  }

 

}
