import { getPosterUrl } from '../services/tmdb';
import { useFavorites } from '../context/FavoritesContext';

export default function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(movie.id);

  return (
    <article className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          className="movie-card__poster"
          src={getPosterUrl(movie.posterPath)}
          alt={`${movie.title} poster`}
          loading="lazy"
        />
      </div>
      <div className="movie-card__body">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__year">{movie.releaseYear}</p>
        <button
          type="button"
          className={`movie-card__fav ${favorited ? 'movie-card__fav--active' : ''}`}
          onClick={() => toggleFavorite(movie)}
          aria-pressed={favorited}
        >
          {favorited ? '♥ Favourited' : '♡ Favourite'}
        </button>
      </div>
    </article>
  );
}
