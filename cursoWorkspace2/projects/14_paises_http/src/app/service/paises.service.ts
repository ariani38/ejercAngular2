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
  public continentes(continente:string):Observable<string[]>{
    return this.http.get <Pais[]>(this.url).pipe(map(p=>p.filter));

  }
}
