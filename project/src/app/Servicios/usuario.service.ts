import {EventEmitter, Injectable} from "@angular/core";
import {Autos, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class UsuarioService {
  contador=0;
  emitircambioAuto:EventEmitter<number>=new EventEmitter();

  constructor(private http: HttpClient){

  }
  hijos;
  autos: Autos[];
  urlHijos='http://localhost:1337/Auto?nombres=Sebastian';
  urlAutos= 'http://localhost:1337/Conductor?nombreMarca=Mercedes%20Benz';
  emitirCambio(cambioAuto:number){
    this.contador=cambioAuto;
    console.log(this.contador);
    this.emitircambioAuto.emit(cambioAuto);
  }

  cargarDatos(){
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
  }
  getAutos(): Observable<Conductor> {
    return this.http.get<Conductor>(this.urlHijos);
  }

}
