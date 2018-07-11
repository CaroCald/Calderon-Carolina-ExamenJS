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
export class ModeloPapaComponent implements OnInit {
  hijos;
  autos: Autos[];
  urlHijos='http://localhost:1337/Auto?nombres=Sebastian';
  urlAutos= 'http://localhost:1337/Conductor?nombreMarca=Mercedes%20Benz';
  contador=this._usuarioService.contador;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.autos = data;
      console.log('modeloooo '+this.autos.map(datos=>datos.nombreMarca));

    });
    this.http.get<Conductor>(this.urlHijos).subscribe(data => {
        this.hijos = data;
        console.log('nombre en modelo ' + this.hijos.nombres);
      },
      err => {
        console.log(err)
      }
    );
    this.escucharCambiosAuto();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {
      this.contador = autos;
      console.log(this.contador)
    });
  }
    seleccionar(){
      this.contador++;
      this._usuarioService.emitirCambio(this.contador);
    }
  }


