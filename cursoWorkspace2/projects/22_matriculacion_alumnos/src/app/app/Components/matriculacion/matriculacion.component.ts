import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatriculacionService } from '../../Service/matriculacion-al.service';
import { Curso } from '../../../../model/Curso';
import { Matricula } from '../../../../model/Matricula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matriculacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculacion.component.html',
  styleUrl: './matriculacion.component.css'
})
export class MatriculacionComponent {
  cursos:Curso[]=[];
   idCursoSeleccionado:number;
   matriculas:Matricula[]=[];

 constructor(private matriculacionService:MatriculacionService){
    this.matriculacionService.buscarCursos().subscribe(data=>this.cursos=data);
  }

  cargarMatriculas(idCursoSeleccionado:number){
    this.matriculacionService.buscarMatriculas(idCursoSeleccionado)
    .subscribe(data=>this.matriculas=data);
  }
}
