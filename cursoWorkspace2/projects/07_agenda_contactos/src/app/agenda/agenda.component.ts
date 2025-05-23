
import { Component } from '@angular/core';
import { Contacto } from './model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
nombre:string;
email:string;
telefono:string;
agenda:Contacto[]=[];
visibleAgenda:boolean=false;//para usarlo después si queremos hacer visible o invisible
agendaNueva:Contacto[]=[];
visibleResult:boolean=false;

guardar():void{
  //creamos un objeto Contacto, primero con los datos del contacto
  //esto si ya en el model hicimos el contructor de la clase
let c=new Contacto(this.nombre,this.email,this.telefono);

//añadimos el contacto al array
this.agenda.push(c);
//
}

mostrar():void{
//si está false la pone a true y viceversa
this.visibleAgenda=!this.visibleAgenda;

}
eliminar(index:number):void{
  this.agenda.splice(index,1);
}

buscar():void{
this.agendaNueva=this.agenda.filter((n)=>n.nombre===this.nombre
                ||n.telefono===this.telefono
               || n.email===this.email);

  this.visibleResult=!this.visibleResult;

}




}

