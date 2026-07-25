import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  getFavorites,
  isFavorite as checkFavorite,
  saveFavorites,
  toggleFavorite,
} from '../services/favorites';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => getFavorites());

  const toggle = useCallback((movie) => {
    setFavorites((prev) => {
      const next = toggleFavorite(movie, prev);
      saveFavorites(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (movieId) => checkFavorite(movieId, favorites),
    [favorites],
  );

  const value = useMemo(
    () => ({ favorites, toggleFavorite: toggle, isFavorite }),
    [favorites, toggle, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return ctx;
}
