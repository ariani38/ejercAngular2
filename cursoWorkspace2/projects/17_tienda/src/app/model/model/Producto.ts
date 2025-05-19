export class Producto{
  codigo:number;
  denominacion:string;
  precio:number
  idCategoria: number
  //puedes o no pasar los parámetros
  //los pone opcionales por los interrogantes
  constructor(codigo?:number,denominacion?:string,precio?:number, idCategoria?:number){
    this.codigo=codigo;
    this.denominacion=denominacion;
    this.precio=precio;
    this.idCategoria=idCategoria;

  }
}

