import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookieValue = 'UNKNOWN';

  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.cookieService.set( 'user', 'Carolina' );
    this.cookieService.set( 'correo', 'carolina@epn.edu.ec' );
    this.cookieService.set( 'apellido', 'Calderon' );

    this.cookieValue = this.cookieService.get('user');
    console.log('valor cookie '+this.cookieValue);
  }
}
