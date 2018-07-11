import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: Autos;
  marca;
  contador=this._usuarioService.contador;

  arregloAutos:Autos;
  ngOnInit(){
    this.escucharCambiosAuto();
  }

  constructor(private http: HttpClient, private _usuarioService:UsuarioService) {
  }


  configUrl = 'http://localhost:1337/Conductor?nombreMarca=Ford';
  urlAutos= 'http://localhost:1337/Conductor?nombreMarca=Ford';

  buscar() {
    console.log(this.configUrl+''+this.marca);
    console.log(this.http.get<Autos>(this.configUrl));
    return this.http.get<Autos>(this.configUrl);

  }
   mostrarBusqueda()
   {
     this.buscar().subscribe((data: Autos) => console.log({data}));
  }
  llenarArreglos(){
    this.buscar().subscribe((data: Autos) => this.arregloAutos= data);

  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.contador= autos;
      console.log(this.contador)
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
  conductor: Conductor[];
}
export interface Conductor {
  nombres: string,
  apellidos: string,
  fechaNacimiento: string,
  numeroAutos: number,
  licenciaValida:boolean
}
