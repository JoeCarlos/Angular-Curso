export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonInfo {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
}
