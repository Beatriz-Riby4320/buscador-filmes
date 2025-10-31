import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { type Movie } from '../types';
import { useFavorites } from '../hooks/useFavorites'; // ✅ importa o hook

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);

  const { favorites, addFavorite, removeFavorite } = useFavorites(); // ✅ usa o contexto
  const isFavorited = favorites.some((fav) => fav.imdbID === movie?.imdbID);


  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id as string);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Carregando...</div>;

  

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)}>⬅ Voltar</button>
      <h1>{movie.Title}</h1>

      {/* ✅ Botão de favoritar */}
      <button onClick={() => 
        isFavorited ? removeFavorite(movie.imdbID) : addFavorite(movie)
      }>
        {isFavorited ? '💔 Remover dos Favoritos' : '❤️ Adicionar aos Favoritos'}
      </button>

      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Ano:</strong> {movie.Year}</p>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Enredo:</strong> {movie.Plot}</p>
    </div>
  );
}
