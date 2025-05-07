import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';

export const routes: Routes = [
  {
    path:"registro",
    component:RegistroComponent},
    {
      path:"buscar",
      component:BuscarComponent},
      {
        path:"mostrar",
        component:MostrarComponent},


];

