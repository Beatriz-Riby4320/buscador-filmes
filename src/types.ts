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
}


