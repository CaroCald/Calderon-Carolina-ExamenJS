import { Component, OnInit } from '@angular/core';
import {Autos, Conductor} from "../home/home.component";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-info-hijos',
  templateUrl: './info-hijos.component.html',
  styleUrls: ['./info-hijos.component.css']
})
export class InfoHijosComponent implements OnInit {

  autos:Autos[];
  urlAutos= 'http://localhost:1337/Conductor?nombreMarca=Mercedes%20Benz';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Autos[]>(this.urlAutos).subscribe((data: Autos[]) => {
      this.autos = data;
      console.log(this.autos.map(datos=>datos.nombreMarca));

    });

  }

}
