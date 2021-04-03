import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Terapeuta } from './terapeuta';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  private url = 'http://127.0.0.1:8000/api/terapeutas';
  constructor(private http:HttpClient) { }

  public salvar(terapeuta:Terapeuta):Observable<Terapeuta>{
    return this.http.post<Terapeuta>(this.url, terapeuta)
  }

  public getTerapeuta(): Terapeuta {
    let terapeuta = new Terapeuta();
    terapeuta.nome = "Adriano";
    terapeuta.email = "adriano.msx8@gmail.com";
    
    return terapeuta;
  }

 public listaTerapeuta():Observable<Terapeuta[]> {
   return  this.http.get<Terapeuta[]>(this.url);
  }
}
