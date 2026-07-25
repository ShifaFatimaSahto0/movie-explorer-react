import MovieGrid from '../components/MovieGrid';
import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="page page--favorites">
      <header className="page-header">
        <h1 className="page-header__title">Your favourites</h1>
        <p className="page-header__subtitle">
          {favorites.length
            ? `${favorites.length} saved title${favorites.length === 1 ? '' : 's'}`
            : 'Save movies from Home with the Favourite button.'}
        </p>
      </header>
      <MovieGrid
        movies={favorites}
        emptyMessage="No favourites yet. Browse Home and tap Favourite on any movie."
      />
    </main>
  );
}
