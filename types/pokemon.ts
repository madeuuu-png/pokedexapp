// types/pokemon.ts

export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface PokemonStat {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    types: PokemonType[];
    stats: PokemonStat[];
  }