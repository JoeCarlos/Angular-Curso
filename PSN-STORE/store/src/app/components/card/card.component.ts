import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

	@Input()
	gameCover: string = "";

	@Input()
	gameLabel: string = "";


	@Input()
	gameType: string = "";
	@Input()
	gamePrice: string = "";
	constructor() {

	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.

	}
}
