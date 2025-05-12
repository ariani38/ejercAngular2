import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
url:string="https://restcountries.com/v2/all ";
  constructor(private http:HttpClient) {

  }
  public obtenerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url);
  }

  //metodo que devuelva un observable con un conjunto de string

  public obtenerContinentes(): Observable<string[]> {
    return this.http.get<Pais[]>(this.url).pipe(
      map(paises =>
        Array.from(new Set(paises.map(p => p.region)))
      )
    );
  }
  public paisesPorContinente(continente: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url).pipe(
      map(paises => paises.filter(p => p.region === continente))
    );
  }
}
