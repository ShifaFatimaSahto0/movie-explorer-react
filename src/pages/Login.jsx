import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredUser, login, logout } from '../services/auth';

export default function Login() {
  const navigate = useNavigate();
  const existing = getStoredUser();
  const [email, setEmail] = useState(existing?.email ?? '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setMessage(result.message);
      return;
    }
    setMessage('Signed in successfully.');
    setPassword('');
    navigate('/');
  }

  function handleLogout() {
    logout();
    setEmail('');
    setPassword('');
    setMessage('You have been signed out.');
  }

  return (
    <main className="page page--login">
      <div className="auth-card">
        <h1 className="auth-card__title">{existing ? 'Account' : 'Sign in'}</h1>
        <p className="auth-card__hint">
          Demo login — credentials are stored locally in your browser only.
        </p>

        {message && (
          <p className="auth-card__message" role="status">
            {message}
          </p>
        )}

        {existing ? (
          <div className="auth-card__signed-in">
            <p>
              Signed in as <strong>{existing.email}</strong>
            </p>
            <button type="button" className="btn btn--secondary" onClick={handleLogout}>
              Sign out
            </button>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleLogin}>
            <label className="auth-form__label">
              Email
              <input
                type="email"
                className="auth-form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
            <label className="auth-form__label">
              Password
              <input
                type="password"
                className="auth-form__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Sign in
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
