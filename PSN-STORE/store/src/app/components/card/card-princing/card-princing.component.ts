import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-princing',
  templateUrl: './card-princing.component.html',
  styleUrls: ['./card-princing.component.css']
})
export class CardPrincingComponent {

	@Input()
	gameType: string = "";
	@Input()
	gamePrice: string = "";

	constructor() { }

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.

	}

}
