export class Cliente{
  idCliente: number;
 usuario:string;
    password:string;

    // Constructor con parámetros opcionales
    constructor(idCliente:number, usuario?: string, password?: string) {
        this.idCliente=idCliente || 0;
        this.usuario = usuario || '';
        this.password = password || '';

    }
}
