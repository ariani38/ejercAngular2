import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { AgendaService } from '../service/AgendaService';
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
contactos:Contacto[];

ageService:AgendaService;

constructor(){
  this.ageService=new AgendaService;
}
guardar(){
let contacto=new Contacto(this.nombre,this.email,this.telefono);
this.ageService.guardar(contacto);

}


mostrar(){
  this.contactos=this.ageService.recuperar();
}
eliminar(index:number):void{
this.ageService.eliminar(index);
}






}


