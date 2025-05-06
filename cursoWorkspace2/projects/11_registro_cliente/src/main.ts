import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
 
import { ValidacionComponent } from './app/validacion/validacion.component';

bootstrapApplication(ValidacionComponent, appConfig)
  .catch((err) => console.error(err));
