import { Routes } from "@angular/router";
import { AltaComponent } from "./components/alta/alta.component";
import { BuscarComponent } from "./components/buscar/buscar.component";

export const routes: Routes = [
  {
    path:"alta",
    component:AltaComponent
  },
  {
    path:"buscar",
    component:BuscarComponent
  },

];
