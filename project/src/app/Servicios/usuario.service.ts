import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {
  contador=0;
  emitircambioAuto:EventEmitter<number>=new EventEmitter();

  emitirCambio(cambioAuto:number){
    this.contador=cambioAuto;
    console.log(this.contador);
    this.emitircambioAuto.emit(cambioAuto);
  }

}
