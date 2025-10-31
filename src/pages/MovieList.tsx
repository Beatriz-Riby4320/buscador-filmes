import { useLocation, useNavigate } from 'react-router-dom';
import { type Movie } from '../types';

export default function MovieList() {
  const navigate = useNavigate();
  const location = useLocation();
  const movies = location.state?.movies as Movie[];

  if (!movies || movies.length === 0) {
    return <div className="dark-theme">Nenhum filme encontrado.</div>;
  }

  return (
    <div className="dark-theme">
      <button onClick={() => navigate(-1)}>⬅ Voltar</button>
      <h2>Resultados da Busca</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
}
