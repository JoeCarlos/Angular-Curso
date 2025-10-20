
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonInfo } from '../interfaces/pokemon.interface'

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeApiUrl = environment.pokeApiUrl;
  private pokeData: PokemonInfo | any;

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<PokemonInfo> {
    this.pokeData = this.http.get<PokemonInfo>(`${this.pokeApiUrl}/pokemon/${name}`);
    return this.pokeData;
    }
}
