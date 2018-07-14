import {EventEmitter, Injectable} from "@angular/core";
import {Autos} from "../home/home.component";

@Injectable()
export class UsuarioService {
  contador=0;parametros;urlnueva;
  mostrar=true;urlnuevaHijos;
  id; total=0;visible=true;
  indiceSeleccionado;indiceHijos;elmiminartotal=0;
  emitircambioAuto:EventEmitter<number>=new EventEmitter();
  emitircambioCompra:EventEmitter<number>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();
  emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  emitirCambioTota:EventEmitter<number>=new EventEmitter();

  autos: Autos[];
  colocarTotal(total){
    this.total=total;
    return total;
  }

 setIndice(indice){
    this.indiceSeleccionado=indice;
 }
  setIndiceHijo(indice){
    this.indiceHijos=indice;
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
  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
    return urlnueva;
  }

  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
    return urlnuevahijos;
  }



}
