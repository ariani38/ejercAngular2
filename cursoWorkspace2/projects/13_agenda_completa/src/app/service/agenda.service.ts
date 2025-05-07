import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agenda:Contacto[]=[];


  guardar(Contacto:Contacto):boolean{
    let c=this.agenda.some((n)=>n.email==Contacto.email);
    if(c){
      return false;
    }else{
      this.agenda.push(Contacto);
      return true;

    }

  }

  eliminar(index:number):void{
this.agenda.splice(index,1);
  }

  recuperar():Contacto[]{
   return this.agenda;

  }

  buscar(email:string):Contacto{
    return this.agenda.find((n)=>n.email==email);

   }

   }




 








