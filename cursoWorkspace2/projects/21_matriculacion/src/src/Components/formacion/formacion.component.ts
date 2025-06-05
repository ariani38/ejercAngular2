import { Component } from '@angular/core';
import { Alumno } from '../../../model/Alumno';
import { Curso } from '../../../model/Curso';
import { FormacionService } from '../../formacion.service';
import { Matricula } from '../../../model/Matricula';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {
  cursos:Curso[];
  alumnosParaMatricular:Alumno[];
  alumnoSeleccionado:string;
  cursoSeleccionado:number;
  mensaje:string;

  constructor(private formacionService:FormacionService){
    this.formacionService.cursosTodos().subscribe(data=>this.cursos=data);
  }
  cargarAlumnosMatricular(){
    this.formacionService.alumnnosNoMatriculados(this.cursoSeleccionado)
    .subscribe(data=>this.alumnosParaMatricular=data);
  }

  matricular(){
    const matricula:Matricula=new Matricula(this.cursoSeleccionado,this.alumnoSeleccionado);
    this.formacionService.matricular(matricula).subscribe(data=>{
      if(data){
        this.mensaje="Alumno matriculado con éxito!";
      }else{
        this.mensaje="No fue posible realizar la matriculación!!";
      }
    });
  }
}

