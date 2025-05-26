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
continentes:string[]=[];
continente:string="";
resultado:Pais[];

constructor(private paisesService: PaisesService){
  this.paisesService.obtenerContinentes().subscribe(d=>this.continentes=d);

}

 
paisesPorContinente():void{
  this.paisesService.paisesPorContinente(this.continente).subscribe(d=>this.paises=d);
}


}
