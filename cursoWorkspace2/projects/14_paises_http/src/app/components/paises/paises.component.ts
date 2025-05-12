import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
paises:Pais[];
continente:string;

constructor(private paisesService: PaisesService){

}
verPaises():void{
  //en la suscripción al obervable le decimos
  // que tiene que hacer con los datos de respuesta
this.paisesService.obtenerPaises().subscribe(d=>this.paises=d);
}

buscarContinente():void{
  this.verPaises.
}

}
