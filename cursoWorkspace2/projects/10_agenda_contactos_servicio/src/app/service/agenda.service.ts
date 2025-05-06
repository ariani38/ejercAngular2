import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agenda:Contacto[]=[];


  guardar(Contacto:Contacto):void{

    this.agenda.push(Contacto);
  }

  eliminar(index:number):void{
this.agenda.splice(index,1);
  }
  recuperar():Contacto[]{
   return this.agenda;

  }
}




