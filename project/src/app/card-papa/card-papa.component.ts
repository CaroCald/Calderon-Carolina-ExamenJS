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
  detallesAutos: Autos[];
  urlAutos= 'http://localhost:1337/Conductor';
  nuevaUrl;
  constructor(private http: HttpClient, private _usuarioService: UsuarioService, private _router:Router) {
  }

  ngOnInit() {
    this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.detallesAutos = data;
    });
    this.escucharCambiosAuto();
    this.escucharCambioBusqueda();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.selccionaAuto= autos;})
  }

  escucharCambioBusqueda() {
    this._usuarioService.emitircambioBusqueda.subscribe((autos) => {this.nuevaUrl= autos;})
  }

  seleccionar(){
    const url = ['/modeloAuto'];
    this._router.navigate(url);

  }
  configUrl = 'http://localhost:1337/Conductor?nombreMarca=';

  buscar() {
    this.nuevaUrl=this.configUrl+''+this.marca;
    return this.http.get<Autos>(this.nuevaUrl);

  }
  id;

  mostrarBusqueda()
  {
    this.buscar().subscribe((data: Autos) => console.log({data}));
    this.nuevaUrl=this.configUrl+''+this.marca;
    this._usuarioService.guardarUrl(this.nuevaUrl);
    this.mostrar=this._usuarioService.mostrar;
    this.http.get<Autos[]>(this.nuevaUrl).subscribe((data: Autos[]) => {
      this.autos = data;
     this._usuarioService.guardarId(data.map(datos=>datos.id).toString());
    });
    console.log('despues de guardar'+this.id);
    this._usuarioService.guardarUrlHijos('http://localhost:1337/Auto?id=2');

  }

}
