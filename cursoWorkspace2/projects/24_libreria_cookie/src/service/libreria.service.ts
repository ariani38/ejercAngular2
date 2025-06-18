import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
urlBase:string="http://localhost:3000/libreria/";
  constructor(private http: HttpClient) { }


autenticarUsuario(usuario: string, password: string): Observable<Cliente> {
return this.http.post<any>(`${this.urlBase}autenticar`,{usuario:usuario, password:password});

}

catalogoLibros(): Observable<Libro[]> {
  return this.http.get<any>(`${this.urlBase}catalogoLibros`);
}

compras(): Observable<any> {
  return this.http.get(`${this.urlBase}compras`,{withCredentials:true});

}

}
