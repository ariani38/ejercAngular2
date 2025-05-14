import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from '../../model/Item';


@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
tematicaSelecionada:string;
resultados:Item[]=[];


constructor(private buscadorService:BuscadorService){
}

buscar():void{
this.buscadorService.buscar(this.tematicaSelecionada).subscribe(d=>this.resultados=d);
}


}



