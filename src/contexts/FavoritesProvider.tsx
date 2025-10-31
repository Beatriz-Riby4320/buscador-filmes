// src/contexts/FavoritesProvider.tsx
import { useState, useEffect, type ReactNode } from 'react';
import { type Movie } from '../types';
import { FavoritesContext } from './FavoritesContext';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('favoriteMovies');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(movie => movie.imdbID !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
