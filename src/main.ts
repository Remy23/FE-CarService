import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <--- IMPORTAMOS APP COMPONENT

// ARRANCAMOS CON APP COMPONENT (El jefe de jefes)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));