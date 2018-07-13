import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Autos, Conductor} from "../home/home.component";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-modelo-papa',
  templateUrl: './modelo-papa.component.html',
  styleUrls: ['./modelo-papa.component.css']
})
export class ModeloPapaComponent implements OnInit{
  hijos: Conductor;
autos: Autos;
urlHijos='http://localhost:1337/Auto?nombres=Sebastian';
urlAutos= 'http://localhost:1337/Conductor?nombreMarca=Mercedes%20Benz';
contador=this._usuarioService.contador;
totalCompra=this._usuarioService.total;
constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
}

ngOnInit() {
  this.escucharCambiosAuto();
}

escucharCambiosAuto() {
  this._usuarioService.emitircambioAuto.subscribe((autos) => {
    this.contador = autos;
  });
}

seleccionar(){
  this.contador++;
  this.totalCompra=this.totalCompra+50;
  this._usuarioService.colocarTotal(this.totalCompra);
  this._usuarioService.emitirCambio(this.contador);
}
}
