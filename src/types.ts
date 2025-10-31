export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Director: string;
  Plot: string;
}

export interface MovieDetails extends Movie {
  Director: string;
  Plot: string;
  Genre: string;
  Runtime: string;
  Actors: string;
}

export interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
}
