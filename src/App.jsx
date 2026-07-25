import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
