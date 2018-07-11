import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Autos, Conductor} from "../home/home.component";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../Servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-papa',
  templateUrl: './card-papa.component.html',
  styleUrls: ['./card-papa.component.css']
})
export class CardPapaComponent implements OnInit {
  contador=0;
  selccionaAuto:boolean;
  marca;
  autos:Autos[];
  detalles=[];
  urlAutos= 'http://localhost:1337/Conductor';
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {

    this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.autos = data;
      console.log(this.autos.map(datos=>datos.nombreModelo));

    });

    this.escucharCambiosAuto();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.selccionaAuto= autos;})
  }
  getAutos(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.urlAutos);
  }
  seleccionar(){
    const url = ['/modeloAuto'];
    this._router.navigate(url);

  }
  configUrl = 'http://localhost:1337/Conductor?nombreMarca=Ford';

  buscar() {
    console.log(this.configUrl+''+this.marca);
    console.log(this.http.get<Autos>(this.configUrl));
    return this.http.get<Autos>(this.configUrl);

  }
  mostrarBusqueda()
  {
    this.buscar().subscribe((data: Autos) => console.log({data}));
  }

}
