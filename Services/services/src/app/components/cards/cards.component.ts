import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { PokemonInfo } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pokemon: PokemonInfo

  constructor(private service: PokemonService) {
    this.pokemon = {
    id: 0,
    name: '',
    types: [],
    sprites: { front_default: '' }
    };
   }

  ngOnInit(): void {
    this.getPokemon('bulbasaur');
  }

  getPokemon(searchName: string) {
        this.service.getPokemon(searchName)
                .subscribe({
                  next: (data) => {
                    this.pokemon = {
                      id: data.id,
                      name: data.name,
                      types: data.types,
                      sprites: data.sprites
                    }
                  },
                  error: (error) => {console.error('There was an error!', error);}
                });
  }

}
