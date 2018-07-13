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
import { InfoHijosComponent } from './info-hijos/info-hijos.component';
import {CookieService} from "ngx-cookie-service";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfoModeloComponent } from './info-modelo/info-modelo.component';
@NgModule({
  declarations: [
    AppComponent,
    CardPapaComponent,
    CardHijoComponent,
    AtributoPapaComponent,
    ModeloPapaComponent,
    DatosCarritoComponent,
    HomeComponent,
    InfoHijosComponent,
    InfoModeloComponent
  ],
  imports: [
    BrowserModule, FormsModule, AutoCompleteModule, BrowserAnimationsModule,
    HttpClientModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [UsuarioService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
