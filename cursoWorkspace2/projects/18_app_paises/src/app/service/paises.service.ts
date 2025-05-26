import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
url:string="http://localhost:3000/paises/"; //direccion base del servicio
  constructor(private http:HttpClient) { //conectarse con http client para un servicio

  }


  //metodo que devuelva un observable con un conjunto de string

  public obtenerContinentes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}continentes`)
  }

  //aquí tenemos un observable.
  //  Pipe nos permite llamar a la funcion que necesitemos
  public paisesPorContinente(continente: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}paisesContinente/${continente}`)//observable de pais

  }
}
