import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  quantidade: number = 0;

  constructor() { }


  adicionar() {
    this.quantidade++;
  }

  decrementar() {
    this.quantidade--;
  }

  ngOnDestroy(): void {
    console.log('CheckSampleComponent ngOnDestroy called');
  }

  ngDoCheck(): void {
    console.log('CheckSampleComponent ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('CheckSampleComponent ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('CheckSampleComponent ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('CheckSampleComponent ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('CheckSampleComponent ngAfterViewChecked called');
  }


  ngOnInit(): void {
    console.log('CheckSampleComponent ngOnInit called');
  }


}
