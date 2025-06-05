import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from '../../../model/Matricula';
import { Curso } from '../../../model/Curso';
import { Observable } from 'rxjs';
import { urlBase } from '../../../../utilities/Constants';

@Injectable({
  providedIn: 'root'
})
export class MatriculacionService {



  constructor(private http:HttpClient) { }



    buscarMatriculas(idCurso:number):Observable<Matricula[]>{
    const url:string =`${urlBase}/findByCurso/${idCurso}`;
    return this.http.get<Matricula[]>(url);
  }

    buscarCursos():Observable<Curso[]>{
    const url:string =`${urlBase}/cursos`;
    return this.http.get<Curso[]>(url);
    }
}
