import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../services/api';
import { type Movie } from '../types';



export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const results: Movie[] = await searchMovies(query);
    navigate('/movie-list', { state: { movies: results } });
  };

  return (
    <div className="home-background">
      <div className="home-content">
        <h1>Buscador de Filmes</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o nome do filme..."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}
