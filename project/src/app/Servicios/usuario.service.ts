import {EventEmitter, Injectable} from "@angular/core";
import {Autos, Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class UsuarioService {
  contador=0;
  parametros;
  urlAutos= 'http://localhost:1337/Conductor';
  urlnueva;
  mostrar=true;
  urlnuevaHijos;
  id; total=0;
  visible=true;
  elmiminartotal=0;
  emitircambioAuto:EventEmitter<number>=new EventEmitter();
  emitircambioCompra:EventEmitter<number>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();
  emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  emitirCambioTota:EventEmitter<number>=new EventEmitter();

  constructor(private http: HttpClient){

  }
  autos: Autos[];

  colocarTotal(total){
    this.total=total;
    return total;
  }
  cambioCompra(totalCompra){
    this.total=totalCompra;
    this.emitircambioCompra.emit(totalCompra);
  }
  getAutos(){
    return this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.autos = data;
    });
  }
  emitirQuitarTotal(cambioAuto:number){
    this. elmiminartotal=cambioAuto;
    this.emitirCambioTota.emit(cambioAuto);
  }
  emitirCambio(cambioAuto:number){
    this.contador=cambioAuto;
    this.emitircambioAuto.emit(cambioAuto);
  }
  emitirEliminar(visible:boolean){
    this.visible=visible;
    this.emiircambioEliminar.emit(visible);
  }
  emitirBusqueda(parametros:string){
    this.parametros=parametros;
    this.emitircambioBusqueda.emit(parametros);
  }
  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
    return urlnueva;
  }

  guardarId(id):string{
    this.id=id;
    console.log('aquiii'+this.id);
    return id;
  }
  geId(){

  }
  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
    return urlnuevahijos;
  }



}
