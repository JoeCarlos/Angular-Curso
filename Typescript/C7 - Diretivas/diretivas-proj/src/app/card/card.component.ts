import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = "adaaamin";
  constructor() {
    this.produtos = ['Carro', 'Moto', 'Avião', 'Navio', 'Bicicleta'];
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push('Novo Produto');
  }
  excluir(index: number){
    this.produtos.splice(index, 1);
  }
  escolherProduto(index: number, produto: string) {
    alert(`Você escolheu: ${index} ${produto}`);
  }
}
