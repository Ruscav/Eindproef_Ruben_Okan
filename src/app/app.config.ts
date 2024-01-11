import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
