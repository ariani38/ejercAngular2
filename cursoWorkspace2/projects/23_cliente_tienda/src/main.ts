import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TiendaComponent } from './app/Components/tienda/tienda.component';


bootstrapApplication(TiendaComponent, appConfig)
  .catch((err) => console.error(err));
