const STORAGE_KEY = 'movie-explorer-favorites';

export function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFavorites(movies) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
}

export function isFavorite(movieId, favorites) {
  return favorites.some((m) => m.id === movieId);
}

export function toggleFavorite(movie, favorites) {
  const exists = isFavorite(movie.id, favorites);
  if (exists) {
    return favorites.filter((m) => m.id !== movie.id);
  }
  return [...favorites, movie];
}
