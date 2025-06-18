export  class Compra{

    tituloLibro:string;
    fechaCompra:Date;
    // Constructor con parámetros opcionales
    constructor(  tituloLibro?: string, fechaCompra?: Date) {

        this.tituloLibro = tituloLibro || '';
        this.fechaCompra = fechaCompra || new Date();
    }
}
