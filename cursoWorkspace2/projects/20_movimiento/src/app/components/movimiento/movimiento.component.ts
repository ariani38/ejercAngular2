import { MovimientosService } from './../../service/movimientos.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Movimiento } from '../../../model/Movimiento';

import { FormsModule } from '@angular/forms';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-movimiento',
  imports: [ FormsModule,CommonModule,MatTableModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatInputModule ],
  templateUrl: './movimiento.component.html',
  styleUrl: './movimiento.component.css'
})
export class MovimientoComponent implements AfterViewInit{
  displayedColumns: string[] = ['Fecha', 'Cantidad', 'Cuenta','Operacion'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Movimiento> = new MatTableDataSource<Movimiento>();
  fecha1:Date;
  fecha2:Date;

   constructor(private movimientosService:MovimientosService){

    }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

buscarFechas(){
  return this.movimientosService.buscarPorFechas(this.fecha1,this.fecha2).subscribe(data=>this.dataSource.data=data);
}


}
