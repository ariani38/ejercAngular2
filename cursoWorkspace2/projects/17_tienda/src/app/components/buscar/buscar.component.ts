import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/model/Producto';
import { TiendaService } from '../../service/tienda.service';
import { Categoria } from './../../model/Categoria';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  categorias:Categoria[]=[];
  categoriaSeleccionada:number;
  productos:Producto[]=[];


   constructor(private tiendaService:TiendaService){
      this.tiendaService.buscarCategorias( )
      .subscribe(data=>this.categorias=data)
   }

    buscarProductos():void{
      this.tiendaService.buscarProductos(this.categoriaSeleccionada)
      .subscribe(data=>this.productos=data);
    }
    eliminarProducto(codigo:number):void{
      this.tiendaService.eliminar(codigo).subscribe();
    }

}
