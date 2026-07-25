import MovieCard from './MovieCard';

export default function MovieGrid({ movies, emptyMessage }) {
  if (!movies.length) {
    return (
      <p className="movie-grid__empty" role="status">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="movie-grid">
      {movies.map((movie) => (
        <li key={movie.id} className="movie-grid__item">
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
