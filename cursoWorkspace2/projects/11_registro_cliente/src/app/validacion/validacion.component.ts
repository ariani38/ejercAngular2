import { Component } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClientesService } from '../service/clientes.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule,CommonModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
usuarioValidar:string;
contrasenaValidar:string;
usuario:string;
contrasena:string;
email:string;
telefono:string;

visible:boolean=false;


constructor(private clientes:ClientesService){

}

registrar(){
let c=new Cliente(this.usuario,this.contrasena,this.email,this.telefono);
this.clientes.registrar(c);
this.visible=false;

}
mostrar(){
this.visible=!this.visible;

}

validar(){
let cliente = this.clientes.validar(this.usuarioValidar,  this.contrasenaValidar);
if (cliente) {
  alert("usuario válido");
} else {
  alert("usuario no válido");
}


}
}
