import { MovimientosService } from './../../service/movimientos.service';
import { Component } from '@angular/core';
import { Movimiento } from '../../../model/Movimiento';
 
import { FormsModule } from '@angular/forms';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movimiento',
  imports: [FormsModule, CommonModule],
  templateUrl: './movimiento.component.html',
  styleUrl: './movimiento.component.css'
})
export class MovimientoComponent {

  movimientos: Movimiento[];
  fecha1:Date;
  fecha2:Date;

   constructor(private movimientosService:MovimientosService){

    }

buscarFechas(){
  return this.movimientosService.buscarPorFechas(this.fecha1,this.fecha2).subscribe(data=>this.movimientos=data);
}


}
