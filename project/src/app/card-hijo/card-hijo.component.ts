import { Component, OnInit } from '@angular/core';
import {Autos, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-card-hijo',
  templateUrl: './card-hijo.component.html',
  styleUrls: ['./card-hijo.component.css']
})
export class CardHijoComponent implements OnInit {
  autos: Conductor[];
  urlAutos = 'http://localhost:1337/Auto';
  urlbusqueda='http://localhost:1337/Auto';
  constructor(private http: HttpClient, private _usuarioservice:UsuarioService) {
  }

  ngOnInit() {

    this.mostrar();
  }

  mostrar(){
    this.http.get<Conductor[]>(this._usuarioservice.urlnuevaHijos).subscribe((data: Conductor[]) => {
      this.autos = data;
      console.log(this.autos.map(data=>data.nombres));
    });
  }


}
