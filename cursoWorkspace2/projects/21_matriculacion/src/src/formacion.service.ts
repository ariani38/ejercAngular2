import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
urlBase:string="http://localhost:3000/";
  constructor(private http:HttpClient) { }


  alta(alumno:Alumno):Observable<any>{
      return this.http.post(this.urlBase+"formacion/altaMatricular",alumno);
    }

cursosTodos():Observable<any>{
return this.http.get(`${this.urlBase}cursos/cursosTodos`);
  }

alumnnosNoMatriculados(idCurso:number):Observable<Alumno[]>{
const urls:string=`${this.urlBase}alumnos/noMatriculados/${idCurso}`;
return this.http.get<Alumno[]>(urls);
}

matricular(usuario:string,idCurso:number):Observable<boolean>{
     const url:string =`${this.urlBase}/matricular/${usuario}/${idCurso}`;
     const body = {
     "usuario": usuario,
     "idCurso": idCurso
   };

     return this.http.post<boolean>(url,body);


  }






}
