import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagContentType } from '@angular/compiler';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
urlBase:string="http://localhost:3000/buscador/"

  constructor(private http:HttpClient) {
  }
 buscar(tematica:string):Observable<Item[]>{
     /*const url_busqueda = `${this.urlBase}/buscar?tematica=${tematica}`;
     return this.http.get<Item[]>(url_busqueda);*/
     const url_busqueda = `${this.urlBase}/buscar`;
     return this.http.get<Item[]>(`${url_busqueda}/${tematica}`);

}
 alta(item:Item):Observable<void>{
    console.log(JSON.stringify(item))
    const url_alta = `${this.urlBase}/alta`;
    let head=new HttpHeaders();
    head.set("Content-Type","application/json")
    return this.http.post<void>(url_alta, item,{headers:head});
  }
 eliminar(tematica:string):Observable<Item[]>{
    const url_eliminar=`${this.urlBase}/eliminar?tematica=${tematica}`;
    return this.http.delete<Item[]>(url_eliminar);
  }



}



