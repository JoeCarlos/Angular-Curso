import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = '';

  constructor() {
    console.log('TitleComponent constructor called');
  }
// ...existing code...
  ngOnChanges(): void {
    console.log('TitleComponent ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('TitleComponent ngOnInit called');
    this.nome = `${this.nome} - Olá!`;
  }
}
