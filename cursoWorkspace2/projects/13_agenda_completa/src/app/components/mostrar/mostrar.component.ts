import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../service/agenda.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar',
  imports: [CommonModule, FormsModule],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent implements OnInit{

agendaContactos:Contacto[];//variable para guardar los contactos

constructor(private agendaService:AgendaService){

}
ngOnInit(): void {
  this.recuperar(); // Llama a recuperar() al inicializar el componente
}
//también ver version de antonio
//en el constructor se puede  

recuperar(){
 this.agendaContactos=this.agendaService.recuperar();
 console.log('Contactos recuperados:');

}

eliminar(index:number){
  this.agendaService.eliminar(index);

}
}
