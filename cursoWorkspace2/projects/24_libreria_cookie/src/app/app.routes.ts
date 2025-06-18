import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ComprasComponent } from './Components/compras/compras.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path:"compras",
    component:ComprasComponent
  },
  {
    path:"catalogo",
    component:CatalogoComponent
  },
  {
    path:"login",
    component:LoginComponent
  }

];
