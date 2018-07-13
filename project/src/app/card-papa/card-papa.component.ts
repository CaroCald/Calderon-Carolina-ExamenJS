import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Autos, Conductor} from "../home/home.component";
import {UsuarioService} from "../Servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-papa',
  templateUrl: './card-papa.component.html',
  styleUrls: ['./card-papa.component.css']
})
export class CardPapaComponent implements OnInit {
  selccionaAuto:boolean;
  marca;
  mostrar=false;
  autos:Autos[];
  conductor:Conductor[];
  nuevaUrl;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.escucharCambiosAuto();
    this.escucharCambioBusqueda();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.selccionaAuto= autos;})
  }

  escucharCambioBusqueda() {
    this._usuarioService.emitircambioBusqueda.subscribe((autos) => {this.nuevaUrl= autos;})
  }

  seleccionar(indice){
    const url = ['/modeloAuto'];
    this._router.navigate(url);
    this._usuarioService.setIndice(indice);
    return indice;
  }
  configUrl = 'http://localhost:1337/Conductor?nombres=';

  buscar() {
    this.nuevaUrl=this.configUrl+''+this.marca;
    return this.http.get<Conductor>(this.nuevaUrl);

  }
  id;

  mostrarBusqueda()
  {
    this.buscar().subscribe((data: Conductor) => console.log({data}));
    this.nuevaUrl=this.configUrl+''+this.marca;
    this._usuarioService.guardarUrl(this.nuevaUrl);
    this.mostrar=this._usuarioService.mostrar;
    this.http.get<Conductor[]>(this.nuevaUrl).subscribe((data: Conductor[]) => {
      this.conductor = data;
    });

    this._usuarioService.guardarUrlHijos('http://localhost:1337/Auto?nombreMarca='+this.marca);

  }

}
