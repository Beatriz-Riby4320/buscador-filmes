import { useFavorites } from '../hooks/useFavorites';
import './FavoritesSidebar.scss';

interface Props {
  onClose: () => void;
}

export default function FavoritesSidebar({ onClose }: Props) {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-sidebar">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h2>Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Nenhum filme favoritado.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} width="60" />
              <div className="info">
                <strong>{movie.Title}</strong>
                <button onClick={() => removeFavorite(movie.imdbID)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}