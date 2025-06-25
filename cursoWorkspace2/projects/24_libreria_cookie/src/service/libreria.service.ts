import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, throwError } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { Libro } from '../model/Libro';
import { Compra } from '../model/Compra';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
urlBase:string="http://localhost:3000/libreria/";
urlStock:string="http://localhost:3000/librerias/stock";
  urlComprar:String="http://localhost:3000/librerias/comprar";


  constructor(private http: HttpClient) { }


autenticarUsuario(username: string, password: string): Observable<Cliente> {
return this.http.post<any>(`${this.urlBase}autenticar`,{usuario:username, password:password}, {withCredentials:true});

}

catalogoLibros(): Observable<Libro[]> {
  return this.http.get<any>(`${this.urlBase}catalogo`);
}

compras(): Observable<Compra[]> {
  return this.http.get<Compra[]>(`${this.urlBase}compras`,{withCredentials:true});

}
compraLibro(isbn:number,unidades:number):Observable<Libro>{
    return this.http.get<any>(`${this.urlStock}/${isbn}`).pipe(
      switchMap(stock => {
        if (stock.units > unidades) {
          return this.http.post<Libro>(`${this.urlComprar}`, { isbn });
        } else {
          return throwError(() => new Error("No hay suficiente stock!!"));
        }
      })
    );

}
}
