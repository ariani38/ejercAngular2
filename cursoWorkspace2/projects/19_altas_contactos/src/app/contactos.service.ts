import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  url:string="http://localhost:3000/contactos";
  constructor(private http:HttpClient) { }

  //esta opcion es para controlar el error en el componente
  alta(contacto:Contacto):Observable<any>{
    return this.http.post(this.url+"/alta",contacto);

  }

  //si el error queremos controlarlo en el service es esta opción
  /*
  alta(contacto:Contacto):Observable<boolean>{
return this.http.post(this.url+"/alta",contacto)
    .pipe(map(()=>true),
              catchError(e=>of(false)));
  }
  }
  */
}

