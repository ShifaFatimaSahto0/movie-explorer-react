const USER_KEY = 'movie-explorer-user';

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function login(email, password) {
  if (!email?.trim() || !password?.trim()) {
    return { ok: false, message: 'Email and password are required.' };
  }
  const user = { email: email.trim() };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return { ok: true, user };
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}
