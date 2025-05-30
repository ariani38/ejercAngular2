import { Component } from '@angular/core';
import { Movimiento } from '../../../model/Movimiento';
import { MovimientosService } from '../../service/movimientos.service';


@Component({
  selector: 'app-movimiento',
  imports: [],
  templateUrl: './movimiento.component.html',
  styleUrl: './movimiento.component.css'
})
export class MovimientoComponent {

  movimiento:Movimiento=new Movimiento();

   constructor(private movimientosService:MovimientosService){

    }



}
