import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/model/Producto';
import { TiendaService } from './../../service/tienda.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta',
  imports: [FormsModule, CommonModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
//objeto producto que se rellena con los datos de los cammpos de texto
producto:Producto=new Producto();

   constructor(private tiendaService:TiendaService){}

   alta():void{
     this.tiendaService.alta(this.producto)
    .subscribe();
   }
  }
