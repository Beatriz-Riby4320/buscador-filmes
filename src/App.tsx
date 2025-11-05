import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { useEffect, useState } from 'react';
import { FavoritesProvider } from './contexts/FavoritesProvider'; // ✅ apenas esta
import './styles/main.scss';



export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Alternar tema
      </button>

      <FavoritesProvider>
        <Router>
          <div className="areatitulo">
            {/* título ou cabeçalho aqui */}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-list" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<div>Página não encontrada</div>} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </div>
  );
}
