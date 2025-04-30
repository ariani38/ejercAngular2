import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
data:any;


mensaje ():void{
 let caja: any HTMLInputElement=document.getElementById("nombre");
}

}
