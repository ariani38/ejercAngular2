export class Curso{
idCurso: number;
nombre: string;
 

constructor(idCurso: number, nombre?: string, duracion?: number) {
    this.idCurso = idCurso;
    this.nombre = nombre || '';


  }
}
