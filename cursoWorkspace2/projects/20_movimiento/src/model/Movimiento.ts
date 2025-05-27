export class Movimiento{
  idMovimiento:number;
  idCuenta:number;
  fecha:Date;
  cantidad:number;
  operacion:string;
  
  constructor(idMovimiento:number, idCuenta?:number, fecha?:Date, cantidad?:number, operacion?:string){
    this.idMovimiento = idMovimiento;
    this.idCuenta = idCuenta || 0;
    this.fecha = fecha || new Date();
    this.cantidad = cantidad || 0;
    this.operacion = operacion || '';
  }
}
