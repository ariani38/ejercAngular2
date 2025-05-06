
import { Injectable } from '@angular/core';
import { Pagina } from '../model/Pagina';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

datos:Pagina[]=[
  new Pagina( "libros",   "http://www.puntolibro.es"),
  new Pagina( "deportes",  "http://www.todofutbol.com"),
  new Pagina("libros",  "http://www.fnac.es"),
  new Pagina( "cocina", "http://www.fogones.es"),
  new Pagina( "juegos", "http://www.game.es")
];



cargarTematicas():string[]{
let c= new Set( this.datos.map(n=>n.tematica));
return Array.from(c);
}


buscar(temaElegido:string):Pagina[]{
 return this.datos.filter(( n)=>n.tematica==temaElegido||"todas"==temaElegido);

}


guardar(Pagina:Pagina):void{
this.datos.push(Pagina);

}

}



