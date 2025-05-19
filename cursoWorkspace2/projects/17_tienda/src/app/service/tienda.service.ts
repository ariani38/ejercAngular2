import { Categoria } from './../model/Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { Producto } from '../model/model/Producto';




@Injectable({
  providedIn: 'root'
})
export class TiendaService {

   urlCategorias:string = 'http://localhost:3000/categorias';
   urlProductos:string = 'http://localhost:3000/productos';

  constructor(private http:HttpClient) { }


  alta(producto:Producto):Observable<void>{
    return this.http.post<void>(this.urlProductos, producto);

  }

  buscarCategorias():Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.urlCategorias);


}

  buscarProductos(idCategoria:number):Observable<Producto[]>{
  return this.http.get<Producto[]>(this.urlProductos,{params:{"idCategoria":idCategoria}})
  ;
}

  eliminar(codigo:number):Observable<void>{

  return this.http.delete<void>(this.urlProductos,{params:{"codigo":codigo}});

  }
  }


