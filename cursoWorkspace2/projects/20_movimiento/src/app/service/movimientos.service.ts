import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../../model/Movimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

   url:string="http://localhost:3000/movimientos/";
  constructor(private http:HttpClient) { }

  alta(movimiento:Movimiento):Observable<any>{
      return this.http.post(this.url+"/alta",movimiento);
    }

  buscarPorCuenta(idCuenta:number):Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.url}buscarPorCuenta/${idCuenta}`)
  }

  buscarPorFechas(fecha1:Date,fecha2:Date):Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.url}fechas?fecha1=${fecha1}&fecha2=${fecha2}`)
  }

}
