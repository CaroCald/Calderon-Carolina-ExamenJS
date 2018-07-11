import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Autos, Conductor} from "../home/home.component";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-card-papa',
  templateUrl: './card-papa.component.html',
  styleUrls: ['./card-papa.component.css']
})
export class CardPapaComponent implements OnInit {

  autos:Conductor[];
  detalles=[];
  urlAutos= 'http://localhost:1337/Auto';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get<Conductor[]>(this.urlAutos).subscribe((data: Conductor[]) => {
      this.autos = data;
      this.detalles=this.autos.map(datos=>datos.nombres);

    });

  }

  getAutos(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.urlAutos);
  }

}
