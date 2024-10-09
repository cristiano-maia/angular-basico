import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]

  // O código provideHttpClient(withFetch()) permite que sua aplicação peça ou envie informações 
  // para um servidor, como quando você busca dados de uma API. 
  // Ele usa uma forma moderna de fazer isso, chamada fetch.

};


