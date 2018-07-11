import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../Servicios/usuario.service";
import {Autos} from "../home/home.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-datos-carrito',
  templateUrl: './datos-carrito.component.html',
  styleUrls: ['./datos-carrito.component.css']
})
export class DatosCarritoComponent implements OnInit {
  contador=this._usuarioService.contador;
  urlUsuarios= 'http://localhost:1337/Usuarios';
  usuarios;
  constructor(private _usuarioService: UsuarioService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Autos[]>(this.urlUsuarios).subscribe((data: Autos[]) => {
      this.usuarios = data;
      console.log(this.usuarios.map(datos=>datos.nombreModelo));

    });
  }

  eliminar(){
    this.contador--;
    this._usuarioService.emitirCambio(this.contador);
  }

}
