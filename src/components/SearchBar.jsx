export default function SearchBar({ value, onChange, onSubmit, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label htmlFor="movie-search" className="visually-hidden">
        Search movies
      </label>
      <input
        id="movie-search"
        type="search"
        className="search-bar__input"
        placeholder="Search for movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" className="search-bar__button" disabled={isLoading}>
        {isLoading ? 'Searching…' : 'Search'}
      </button>
    </form>
  );
}
