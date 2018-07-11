import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardPapaComponent } from './card-papa/card-papa.component';
import { CardHijoComponent } from './card-hijo/card-hijo.component';
import { AtributoPapaComponent } from './atributo-papa/atributo-papa.component';
import { ModeloPapaComponent } from './modelo-papa/modelo-papa.component';
import { DatosCarritoComponent } from './datos-carrito/datos-carrito.component';
import { HomeComponent } from './home/home.component';
import {RUTAS_APP} from "./app.rutas";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UsuarioService} from "./Servicios/usuario.service";

@NgModule({
  declarations: [
    AppComponent,
    CardPapaComponent,
    CardHijoComponent,
    AtributoPapaComponent,
    ModeloPapaComponent,
    DatosCarritoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
