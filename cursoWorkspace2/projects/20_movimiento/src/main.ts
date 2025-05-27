import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MovimientoComponent } from './app/components/movimiento/movimiento.component';


bootstrapApplication(MovimientoComponent, appConfig)
  .catch((err) => console.error(err));
