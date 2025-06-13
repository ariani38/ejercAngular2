import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../model/Producto';
import { Pedido } from '../../model/Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  token:string;
  username:"user1";
  password:"user1";
  urlBaseRecursos:string="http://localhost:3000/tienda";
  urlAutenticar:string="http://localhost:3000/auth/login";

  constructor(private http:HttpClient) {
//nos conectamos con el recurso de login para obtener el token
http.post<any>(this.urlAutenticar,{username:this.username,password: this.password})
.subscribe(data=>this.token=data.access_token)

   }
productos():Observable<Producto[]>{
  console.log("token: "+this.token);
  //hay que mandar en la cabecera
  let head=new HttpHeaders();
  head=head.set("Authorization", `Bearer ${this.token}`)
  return this.http.get<Producto[]>(`${this.urlBaseRecursos}/productos`,{headers:head});
  }

  altaPedido(pedido:Pedido):Observable<void>{
 let head=new HttpHeaders();
  head=head.set("Autorization", `Bearer ${this.token}`)
  return this.http.post<void>(`{this.urlBaseRecursos}/altaPedido`,pedido,{headers:head});
  }

}


