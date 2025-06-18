import { Component } from '@angular/core';
import { Cliente } from '../../../model/Cliente';
import { LibreriaService } from '../../../service/libreria.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
usuario:string;
password:string;
mensaje: string;

cliente:Cliente;
constructor(private libreriaService:LibreriaService){}

  autenticar() {
    this.libreriaService.autenticarUsuario(this.usuario, this.password).subscribe(data=>{
      if(data){
this.mensaje="Usuario válido";
      }else{
        this.mensaje="Usuario no válido";
      }
    });
  }
      }









