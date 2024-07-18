export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  image: string;
}

export interface FavoritesState {
  characters: Character[];
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}
export interface InfoCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    type?: string;
    dimension?: string;
  };
  location: {
    name: string;
    type?: string;
    dimension?: string;
  };
  image: string;
  episode: string[];
}