import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MenuComponent } from './app/Components/menu/menu.component';


bootstrapApplication(MenuComponent, appConfig)
  .catch((err) => console.error(err));
