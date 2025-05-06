import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
 arrayClientes:Cliente[]=[];


  registrar(Cliente:Cliente):void{

    this.arrayClientes.push(Cliente);
  }

  //eliminar(index:number):void{
//this.agenda.splice(index,1);
 // }

 validar(usuario:string,contrasena:string):Cliente{
  return this.arrayClientes.find((n)=>n.usuario==usuario&&n.contrasena==contrasena);

  }

}
