import { Component, OnInit } from '@angular/core';
import {Conductor} from "../home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-card-hijo',
  templateUrl: './card-hijo.component.html',
  styleUrls: ['./card-hijo.component.css']
})
export class CardHijoComponent implements OnInit {
  autos: Conductor;
  urlAutos = 'http://localhost:1337/Auto';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAutos().subscribe(data => {
        this.autos = data;
        console.log('nombre ' + this.autos.nombres);
      },
      err => {
        console.log(err)
      }
    );
  }

  getAutos(): Observable<Conductor> {
    return this.http.get<Conductor>(this.urlAutos);
  }
}
