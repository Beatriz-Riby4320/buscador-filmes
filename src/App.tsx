import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { FavoritesProvider } from './contexts/FavoritesProvider'; // ✅ apenas esta
import './App.css';


import './App.css';

export default function App() {
  return (
     <FavoritesProvider>
      <Router>
        <div className='areatitulo'>
      
        </div>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
    </FavoritesProvider>
  );
}
