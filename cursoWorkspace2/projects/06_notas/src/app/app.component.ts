import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nota: number;
  notas: number[] = [];
  notaMedia: number;

  notaAlta: number;
  notaBaja: number;
  totalAprobados: number;



  guardar() {

      this.notas.push(this.nota);

    }

   datos():void {

    //OJO si quisiera llamar a otras funciones en esta sería asi;
    //this.media=this.calcularMedia;
    //this.alta=this.calcularBaja;

       if (this.notas.length > 0) {
        const suma = this.notas.reduce((n, nota) => n + nota);
        this.notaMedia = suma / this.notas.length;

      }


    if (this.notas.length > 0) {
      this.notaAlta = Math.max(...this.notas);

    }
    /*tambien otra forma de hacer calcular la alta

  calcularAlta()
    let max=this.notas[0]
    this.notas.forEach(n=>{
    if (n>max){
    max=n;
     }
   return max;
  })

    */



  if (this.notas.length > 0) {
    this.notaBaja = Math.min(...this.notas);

  }

  this.totalAprobados = 0;
  for (let n of this.notas) {
    if (n >= 5) {
      this.totalAprobados++;
    }
  }


/*otra forma de hacer los aprobrados
totalAprobados(): number{
return this.notas.filter(n=> n>=5).lenght;
}
*/


   }
  }
