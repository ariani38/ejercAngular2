import { Component } from '@angular/core';
import { BuscadorService } from '../service/buscador.service';
import { Pagina } from '../model/Pagina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

constructor(private buscador:BuscadorService){
}
tematica:string="";
direccion:string="";
temaElegido:string="";
visible:boolean=false;//para usarlo después si queremos hacer visible o invisible
resultados:Pagina[]=[];
tematicasArray:string[]=[];
agregarVisible:boolean=false;

cargarTematicas(){
this.tematicasArray=this.buscador.cargarTematicas();
}

buscar(){
  this.resultados = this.buscador.buscar(this.temaElegido);
  this.visible=!this.visible;
}
guardar(){
 let c=new Pagina(this.tematica,this.direccion );
 this.buscador.guardar(c);
}

agregarPagina(){
  this.agregarVisible=!this.agregarVisible;
}

}
