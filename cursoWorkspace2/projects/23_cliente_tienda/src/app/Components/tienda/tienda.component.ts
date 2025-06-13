import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../model/Producto';
import { TiendaService } from '../../service/tienda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda',
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
productos:Producto[];
constructor(private tiendaService:TiendaService){

}
mostrar(){
  this.tiendaService.productos().subscribe(data=>this.productos=data);
}

}
