import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../Servicios/usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Autos, Conductor} from "../home/home.component";
@Component({
  selector: 'app-info-modelo',
  templateUrl: './info-modelo.component.html',
  styleUrls: ['./info-modelo.component.css']
})
export class InfoModeloComponent implements OnInit  {

  hijos;
autos;
urlHijos='http://localhost:1337/Condutor?nombres=Lewis';
urlAutos= 'http://localhost:1337/Auto?nombreMarca=Ferrari';
contador=this._usuarioService.contador;
totalCompra=this._usuarioService.total;
constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
}

ngOnInit() {
  this.http.get<Autos>(this.urlAutos).subscribe((data: Autos) => {
    this.autos = data;
    console.log('modeloooo '+data.nombreModelo);

  });
  this.http.get<Conductor>(this.urlHijos).subscribe((data: Conductor) => {
    this.hijos = data;
    console.log('modeloooo '+data.numeroAutos);

  });
  this.escucharCambiosAuto();
}

escucharCambiosAuto() {
  this._usuarioService.emitircambioAuto.subscribe((autos) => {
    this.contador = autos;
  });
}

}

