import { Component } from '@angular/core';
import { Compra } from '../../../model/Compra';
import { LibreriaService } from '../../../service/libreria.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  compras:Compra[];

constructor( libreriaService:LibreriaService){
   libreriaService.compras().subscribe(data=>this.compras=data)
}


}
