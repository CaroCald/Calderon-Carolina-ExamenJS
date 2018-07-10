import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-papa',
  templateUrl: './card-papa.component.html',
  styleUrls: ['./card-papa.component.css']
})
export class CardPapaComponent implements OnInit {

  casa=[];
  constructor() { }

  ngOnInit() {
    this.casa=[{
      info: 'Casa Uno',
      privilegio:'Total'
    },
      {
        info: 'Quito',
        privilegio:'Invitado'
      },
      {
        info: 'Quito',
        privilegio:'Invitado'
      },
      {
        info: 'Quito',
        privilegio:'Invitado'
      },
      {
        info: 'Quito',
        privilegio:'Invitado'
      }
      ,
      {
        info: 'Quito',
        privilegio:'Invitado'
      }
      ,
      {
        info: 'Quito',
        privilegio:'Invitado'
      }

      ]

  }

}
