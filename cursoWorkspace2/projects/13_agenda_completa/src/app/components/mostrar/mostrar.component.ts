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

agendaContactos:Contacto[]=[];

constructor(private agendaService:AgendaService){

}
ngOnInit(): void {
  this.recuperar(); // Llama a recuperar() al inicializar el componente
}
recuperar(){
 this.agendaContactos=this.agendaService.recuperar();
 console.log('Contactos recuperados:');

}

eliminar(index:number){
  this.agendaService.eliminar(index);

}
}
