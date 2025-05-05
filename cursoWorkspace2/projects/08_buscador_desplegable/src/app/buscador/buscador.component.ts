import { Component } from '@angular/core';
import { Pagina } from './model/Pagina';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})

export class BuscadorComponent {

tematica:string="";
direccion:string="";
datos:Pagina[]=[
  new Pagina( "libros",   "http://www.puntolibro.es"),
  new Pagina( "deportes",  "http://www.todofutbol.com"),
  new Pagina("libros",  "http://www.fnac.es"),
  new Pagina( "cocina", "http://www.fogones.es"),
  new Pagina( "juegos", "http://www.game.es")
];
visible:boolean=false;//para usarlo después si queremos hacer visible o invisible
temaElegido:string="";
resultados:Pagina[]=[];


//cuando damos al select debe mostrar las temáticas sin repetir
//vuelvo a convertir en array para poder iterar en html
cargarTematicas():string[]{
 let ctematicas= new Set( this.datos.map(n=>n.tematica));
 return Array.from(ctematicas);
}

//al seleccionar una temática debe dar como resultado las paginas con la temática
buscar():void{
 this.resultados=this.datos.filter(( n)=>n.tematica==this.temaElegido||"todas"==this.temaElegido);
 this.visible=!this.visible;
}


guardar():void{
  //creamos un objeto Pagina, primero con los datos del contacto
  //esto si ya en el model hicimos el contructor de la clase
let c=new Pagina(this.tematica,this.direccion);
//añadimos el contacto al array
this.datos.push(c);

}

}













