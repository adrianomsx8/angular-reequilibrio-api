import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  baseurl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  constructor(private http: HttpClient) { }

  /*getEstados():Observable<any[]>{
     return this.http.get<any[]>(this.url);
  }*/

  // GET
  getEstados(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl);
  }

}
