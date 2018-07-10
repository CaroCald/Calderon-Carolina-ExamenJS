import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardPapaComponent } from './card-papa/card-papa.component';
import { CardHijoComponent } from './card-hijo/card-hijo.component';
import { AtributoPapaComponent } from './atributo-papa/atributo-papa.component';
import { ModeloPapaComponent } from './modelo-papa/modelo-papa.component';
import { DatosCarritoComponent } from './datos-carrito/datos-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPapaComponent,
    CardHijoComponent,
    AtributoPapaComponent,
    ModeloPapaComponent,
    DatosCarritoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
