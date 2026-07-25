import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { fetchPopularMovies, searchMovies } from '../services/tmdb';

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const loadPopular = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchPopularMovies();
      setMovies(results);
      setSearched(false);
    } catch (err) {
      setError(err.message || 'Failed to load movies.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPopular();
  }, [loadPopular]);

  async function handleSearch() {
    const trimmed = query.trim();
    if (!trimmed) {
      loadPopular();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(trimmed);
      setMovies(results);
      setSearched(true);
    } catch (err) {
      setError(err.message || 'Search failed.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  const emptyMessage = searched
    ? 'No movies found. Try another search.'
    : 'No movies to show.';

  return (
    <main className="page page--home">
      <section className="hero">
        <h1 className="hero__title">Discover your next watch</h1>
        <p className="hero__subtitle">Search TMDB or browse popular titles.</p>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSearch}
          isLoading={loading}
        />
      </section>

      {error && (
        <p className="page__error" role="alert">
          {error}
        </p>
      )}

      {loading && !movies.length ? (
        <p className="page__loading" role="status">
          Loading movies…
        </p>
      ) : (
        <MovieGrid movies={movies} emptyMessage={emptyMessage} />
      )}
    </main>
  );
}
