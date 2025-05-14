import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagContentType } from '@angular/compiler';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
url:string="http://localhost:8000/buscador/"

  constructor(private http:HttpClient) {
  }

   buscar(tematica:string):Observable<Item[]>{
    return this.http.get<Item[]>("http://localhost:8000/buscador/buscar?tematica=libros",
      {params:{"tematica":tematica}});
}



}



