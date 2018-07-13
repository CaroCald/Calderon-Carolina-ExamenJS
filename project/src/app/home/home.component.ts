import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: Autos;
  contador=this._usuarioService.contador;
  user;
  ngOnInit(){
    this.escucharCambiosAuto();
    this.contador=this._usuarioService.contador;
    this.user=this.cookieService.get('user');
  }

  constructor(private http: HttpClient, private _usuarioService:UsuarioService, private cookieService: CookieService) {
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.contador= autos;
    });

  }
}
export interface Autos{
  nombreMarca: string,
  nombreModelo: string
  chasis: number,
  colorUno:string,
  colorDos: string,
  anio: number,
  conductorIdFK:number
  id:number
  conductor: Conductor[];
}
export interface Conductor {
  nombres: string,
  apellidos: string,
  fechaNacimiento: string,
  numeroAutos: number,
  id:number
  licenciaValida:boolean
}
