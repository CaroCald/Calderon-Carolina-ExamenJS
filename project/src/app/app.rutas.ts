import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AtributoPapaComponent} from "./atributo-papa/atributo-papa.component";
import {ModeloPapaComponent} from "./modelo-papa/modelo-papa.component";
import {CardPapaComponent} from "./card-papa/card-papa.component";
import {DatosCarritoComponent} from "./datos-carrito/datos-carrito.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'modeloAuto',
    component: AtributoPapaComponent,
  },
  {
    path: 'modeloConductor',
    component: ModeloPapaComponent,
  },
  {
    path: 'carrito',
    component: DatosCarritoComponent,
  },
  {
    path: '**',
    component: CardPapaComponent
  }
];
