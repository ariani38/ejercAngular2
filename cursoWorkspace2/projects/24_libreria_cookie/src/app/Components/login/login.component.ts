import { Component } from '@angular/core';
import { Cliente } from '../../../model/Cliente';
import { LibreriaService } from '../../../service/libreria.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';

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
constructor(private libreriaService:LibreriaService, private matDialog:MatDialog){}

  autenticar() {
    this.libreriaService.autenticarUsuario(this.usuario, this.password).subscribe(data=>{
      if(data){
        this.matDialog.open(CuadroDialogoComponent, {
          data: { mensaje: "Usuario autenticado correctamente" }
        });

      }else{
        this.matDialog.open(CuadroDialogoComponent, {
          data: { mensaje: "Usuario no válido" }
        });
      }
    });
  }
      }









