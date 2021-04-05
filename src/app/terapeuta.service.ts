import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Terapeuta } from './terapeuta';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

   private url = environment.host + "terapeutas";

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

  public delete(id:string):Observable<any>{
    return this.http.delete(this.url + "/" + id)
  }

 public listaTerapeuta():Observable<Terapeuta[]> {
   return  this.http.get<Terapeuta[]>(this.url);
  }
}
