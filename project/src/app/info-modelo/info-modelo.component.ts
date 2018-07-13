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

  hijos:Conductor;
autos:Autos;
urlHijos='http://localhost:1337/Conductor?nombres=Sergio&apellidos=Sainz';
urlAutos= 'http://localhost:1337/Auto?nombreMarca=Ferrari&id=24';
contador=this._usuarioService.contador;
constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
}

ngOnInit() {
  this.http.get<Autos>(this.urlAutos).subscribe((data: Autos) => {
    this.autos = data[0];
    console.log('************INFO-MODELO-COMPONENT****'+data.nombreMarca);
  });
  this.http.get<Conductor[]>(this.urlHijos).subscribe((data:Conductor[]) => {
    this.hijos = data[0];
  });

}


}

