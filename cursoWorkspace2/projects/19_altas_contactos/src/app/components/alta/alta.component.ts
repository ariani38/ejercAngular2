import { Component } from '@angular/core';
import { ContactosService } from '../../contactos.service';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';

 @Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string;
  contacto:Contacto=new Contacto();
  constructor(private contactosService:ContactosService){

  }
  alta(){
    this.contactosService.alta(this.contacto).subscribe({
        next: data=>this.mensaje="Contacto agregado",
        error: err=>this.mensaje="No se pudo dar de alta el contacto!!!"
      }

    );

  }

/*Si el error se ha capturado en el service
alta(){
this.contactosService.alta(this.contacto)
.suscribe(data=>{
if(data){
this.mensaje="Contacto agregado";
}else{
this.mensaje="no se pudo dar de alta al contacto":
}
}

)
}

*/
}
