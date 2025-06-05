import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { MatriculacionComponent } from './app/app/Components/matriculacion/matriculacion.component';

bootstrapApplication(MatriculacionComponent, appConfig)
  .catch((err) => console.error(err));
