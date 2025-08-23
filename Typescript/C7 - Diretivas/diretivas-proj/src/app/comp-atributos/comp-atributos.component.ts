import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'disable';
  corFundo: string = 'blue';
  font: string = 'white';
  intem: string = '';
  lista: string[] = [];

  isEnabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  trocarEstilo(){
    if(this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

  adicionarItem() {
    if (this.intem) {
      this.lista.push(this.intem);
      this.intem = '';
    }
  }
}
