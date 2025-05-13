import { Provincia } from './../model/Provincia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Municipio } from '../model/Municipio';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
urlProvincias="https://www.el-tiempo.net/api/json/v2/provincias";
  constructor(private http:HttpClient) {

  }
  public obtenerProvincias():Observable<Provincia[]>{
    return this.http.get<any>(this.urlProvincias)//observable
    .pipe(  map(obj => obj.provincias ));//Observable provincias
  }

  public municipioProvincia(cod:number):Observable<Municipio[]>{
    const url: string=`${this.urlProvincias}/${cod}/municipios`;
    return this.http.get<any>(url)
        .pipe( map(datos => datos.municipios)
    );
  }

}
