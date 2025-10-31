import { createContext } from 'react';
import { type Movie } from '../types';

export type FavoritesContextType = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};

// ✅ Apenas cria o contexto, sem valores reais
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
