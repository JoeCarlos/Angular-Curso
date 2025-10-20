import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRout: ActivatedRoute,
    private router: Router
  ) {
    this.activeRout.firstChild?.params.subscribe(res => console.log(res))
    this.activeRout.queryParams.subscribe(res => console.log(res))
  }

  ngOnInit(): void {
    setInterval(() => {
      this.router.navigate(['/']);
    }, 10000);
  }

}
