import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../Servicios/usuario.service";
import {Autos} from "../home/home.component";

@Component({
  selector: 'app-modelo-papa',
  templateUrl: './modelo-papa.component.html',
  styleUrls: ['./modelo-papa.component.css']
})
export class ModeloPapaComponent implements OnInit {
  autos: Autos;
  contador = this._usuarioService.contador;
  totalCompra = this._usuarioService.total;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.escucharCambiosAuto();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {
      this.contador = autos;
    });
  }

  seleccionar() {
    this.contador++;
    this.totalCompra = this.totalCompra + 50;
    this._usuarioService.colocarTotal(this.totalCompra);
    this._usuarioService.emitirCambio(this.contador);
  }
}
