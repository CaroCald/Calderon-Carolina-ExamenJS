import { Component, OnInit } from '@angular/core';
import {Autos, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-atributo-papa',
  templateUrl: './atributo-papa.component.html',
  styleUrls: ['./atributo-papa.component.css']
})
export class AtributoPapaComponent implements OnInit {
 autos:Autos[];
  hijos;
  urlAutos= 'http://localhost:1337/Auto?nombreMarca=Ford';
  urlHijos='http://localhost:1337/Conductor?nombres=Sergio&apellidos=Sainz';
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.autos = data;
      console.log(this.autos.map(datos=>datos.nombreMarca));

    });

    this.getAutos().subscribe(data => {
        this.hijos = data;
        console.log('nombre ' + this.hijos.nombres);
      },
      err => {
        console.log(err)
      }
    );
  }

  getAutos(): Observable<Conductor> {
    return this.http.get<Conductor>(this.urlHijos);
  }

  seleccionar(index){
    this._usuarioService.setIndice(index)
  }


}
