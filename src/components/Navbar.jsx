import { NavLink, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getStoredUser } from '../services/auth';

export default function Navbar() {
  const location = useLocation();
  const user = useMemo(() => getStoredUser(), [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" end>
          Movie Explorer
        </NavLink>
        <nav className="navbar__links" aria-label="Main">
          <NavLink to="/" className="navbar__link" end>
            Home
          </NavLink>
          <NavLink to="/favorites" className="navbar__link">
            Favorites
          </NavLink>
          <NavLink to="/login" className="navbar__link">
            {user ? 'Account' : 'Login'}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
