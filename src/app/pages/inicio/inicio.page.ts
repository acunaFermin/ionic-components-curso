import { Component, OnInit } from '@angular/core';

export interface Componente {
  icon      :string;
  redirecTo :string;
  title     :string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'alert-outline',
      redirecTo:'/alert',
      title:'Alert',
    },
    {
      icon:'accessibility-outline',
      redirecTo:'/action-sheet',
      title:'Action sheet',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
