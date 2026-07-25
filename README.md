# Movie Explorer (React + Vite)

A lightweight React app to search and browse movies using The Movie Database (TMDB) API. Built with Vite and React, it includes a simple local auth, favorites management, and responsive movie cards.

**Features**
- Search movies via TMDB
- View popular movies on the home page
- Save and remove favorite movies (stored in localStorage)
- Simple login/logout (localStorage-based)
- Responsive UI with poster placeholders when missing

**Prerequisites**
- Node.js 18+ and npm
- A TMDB API key (free from https://www.themoviedb.org)

**Environment**
Create a `.env` file in the project root with your TMDB key (Vite reads variables prefixed with `VITE_`):

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

If you need an example, copy `.env.example` to `.env` and add your key.

**Install**

```bash
npm install
```

**Run (development)**

```bash
npm run dev
```

Open the dev server URL shown by Vite (usually `http://localhost:5173`).

**Build**

```bash
npm run build
npm run preview
```

**Project Structure (key files)**
- [src/App.jsx](src/App.jsx)
- [src/main.jsx](src/main.jsx)
- [src/components/MovieGrid.jsx](src/components/MovieGrid.jsx)
- [src/components/MovieCard.jsx](src/components/MovieCard.jsx)
- [src/components/Navbar.jsx](src/components/Navbar.jsx)
- [src/components/SearchBar.jsx](src/components/SearchBar.jsx)
- [src/context/FavoritesContext.jsx](src/context/FavoritesContext.jsx)
- [src/pages/Home.jsx](src/pages/Home.jsx)
- [src/pages/Favorites.jsx](src/pages/Favorites.jsx)
- [src/pages/Login.jsx](src/pages/Login.jsx)
- [src/services/tmdb.js](src/services/tmdb.js) — TMDB client, uses `VITE_TMDB_API_KEY`
- [src/services/auth.js](src/services/auth.js) — simple localStorage-based auth
- [src/services/favorites.js](src/services/favorites.js) — favorites storage helpers

**Environment variable used**
- `VITE_TMDB_API_KEY` — required for searching and fetching popular movies. The app will throw an error at runtime if it's missing.

**Usage**
- Search for movies via the search bar on the Home page.
- Click the heart icon on a movie card to toggle favorites.
- Visit the Favorites page to view saved movies.
- Use the Login page to simulate sign-in (stored locally).

**Notes & Tips**
- Favorites and user session are stored in `localStorage` under keys `movie-explorer-favorites` and `movie-explorer-user`.
- Poster images use `https://image.tmdb.org/t/p/w500`; missing posters show a placeholder.
- If you plan to deploy, ensure your production environment provides `VITE_TMDB_API_KEY` to the build.

**Scripts**
`npm run dev` — start dev server
`npm run build` — build production
`npm run preview` — preview production build

---



Enjoy exploring movies!
