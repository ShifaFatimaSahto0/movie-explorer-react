import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';
export const POSTER_PLACEHOLDER =
  'https://via.placeholder.com/500x750/1a1a1a/666?text=No+Poster';

const client = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

function normalizeMovie(item) {
  return {
    id: item.id,
    title: item.title,
    releaseYear: item.release_date ? item.release_date.slice(0, 4) : 'N/A',
    posterPath: item.poster_path,
    overview: item.overview,
  };
}

export async function searchMovies(query) {
  if (!API_KEY) {
    throw new Error(
      'Missing VITE_TMDB_API_KEY. Copy .env.example to .env and add your TMDB key.',
    );
  }
  const trimmed = query.trim();
  if (!trimmed) return [];

  const { data } = await client.get('/search/movie', {
    params: { query: trimmed },
  });
  return (data.results ?? []).map(normalizeMovie);
}

export async function fetchPopularMovies() {
  if (!API_KEY) {
    throw new Error(
      'Missing VITE_TMDB_API_KEY. Copy .env.example to .env and add your TMDB key.',
    );
  }
  const { data } = await client.get('/movie/popular');
  return (data.results ?? []).map(normalizeMovie);
}

export function getPosterUrl(posterPath) {
  if (!posterPath) return POSTER_PLACEHOLDER;
  return `${POSTER_BASE}${posterPath}`;
}
