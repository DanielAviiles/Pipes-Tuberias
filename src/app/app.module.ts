import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
// El segundo parametro 'es-CO'' es opcional
registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswPipe } from './pipes/passw.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    DomseguroPipe,
    PasswPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
