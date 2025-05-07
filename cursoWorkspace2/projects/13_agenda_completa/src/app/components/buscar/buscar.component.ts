import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendaService } from '../../service/agenda.service';
import { Contacto } from '../../model/Contacto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})

export class BuscarComponent {
email:string;
contactoEncontrado:Contacto;

constructor(private agenda:AgendaService){

}

buscar(){
this.contactoEncontrado=this.agenda.buscar(this.email);
}

 }






