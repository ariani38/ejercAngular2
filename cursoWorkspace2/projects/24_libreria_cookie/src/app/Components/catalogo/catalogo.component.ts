import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { LibreriaService } from '../../../service/libreria.service';
import { Libro } from '../../../model/Libro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
libros:Libro[];
  constructor(  libreriaService: LibreriaService) {
    libreriaService.catalogoLibros().subscribe(data=>this.libros = data);}


}

