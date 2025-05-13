import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../service/provincias.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Municipio } from '../model/Municipio';
import { Provincia } from '../model/Provincia';

@Component({
  selector: 'app-provincias',
  imports: [FormsModule, CommonModule],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})
export class ProvinciasComponent  {

provincias:Provincia[];
provSeleccionada:string;
municipios:Municipio[];
code:number;


constructor(private provinciasService:ProvinciasService){
this.provinciasService.obtenerProvincias().subscribe(d=>this.provincias=d);
console.log("aquí ");

}
municipioProvincia():void{
  this.provinciasService.municipioProvincia(this.code).subscribe(d=>this.municipios=d);
}





}

