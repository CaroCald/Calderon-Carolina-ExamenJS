import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent
  }
];
