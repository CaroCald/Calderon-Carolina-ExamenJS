import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: Autos;
  marca;
  arregloAutos:Autos;
  ngOnInit(){
  }

  constructor(private http: HttpClient) {
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
