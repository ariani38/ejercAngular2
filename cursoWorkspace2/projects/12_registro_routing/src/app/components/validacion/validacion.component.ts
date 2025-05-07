import { Component } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
usuario:string;
contrasena:string;


//se crea un contructor de la clase Service para poder llamar a sus metodos
constructor(private clientesService:ClientesService){

}
validar(){
  let cliente = this.clientesService.validar(this.usuario,  this.contrasena);
  if (cliente) {
    alert("usuario válido");
  } else {
    alert("usuario o contrasena no válida");
  }


}
}
