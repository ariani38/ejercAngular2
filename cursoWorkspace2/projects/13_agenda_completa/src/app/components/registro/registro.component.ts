import { Component } from '@angular/core';
import { AgendaService } from '../../service/agenda.service';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
nombre:string;
email:string;
telefono:string;
contactos:Contacto[];


constructor(private agenda:AgendaService){

}

guardar(){
let contacto=new Contacto(this.nombre,this.email,this.telefono);
if (this.agenda.guardar(contacto)==false){
  alert("Este email ya ha sido utilizado");
}else{
  alert("Contacto guardado");
  
}


}






}
