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

export interface InfoCharacter {
  id: number;
  name: string;
  gender: string;
  status: string;
  image: string;
  origin: {
    name: string;
    dimension: string;
    type: string;
  };
  location: {
    name: string;
    type: string;
    dimension: string;
  };
  episode: { id: string }[];
}
export interface SearchBarProps {
  onSearch: (value: string) => void;
}
