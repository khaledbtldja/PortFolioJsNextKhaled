"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import './login.scss';

// Charger la Navbar dynamiquement sans rendu côté serveur
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Pour basculer entre connexion et inscription
  const router = useRouter();

  const validateForm = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Tous les champs sont obligatoires.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Le nom d\'utilisateur doit contenir un "@" et un ".com".');
      return false;
    }

    if (password.length < 7) {
      setError('Le mot de passe doit comporter au moins 7 caractères.');
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/users.json');
      const users = await response.json();

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('username', username); // Stocker le nom d'utilisateur dans les cookies
        router.replace('/Comment');
      } else {
        setError('Identifiants invalides.');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion:', err);
      setError('Erreur de connexion.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/users.json');
      const users = await response.json();

      const userExists = users.find(u => u.username === username);

      if (userExists) {
        setError('Le nom d\'utilisateur existe déjà.');
      } else {
        const newUser = { username, password };
        users.push(newUser);

        await fetch('/api/saveUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(users),
        });

        setError('');
        setUsername('');
        setPassword('');
        setIsLogin(true);
        alert('Inscription réussie ! Veuillez vous connecter.');
      }
    } catch (err) {
      console.error('Erreur lors de l\'inscription:', err);
      setError('Erreur lors de l\'inscription.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          <form onSubmit={isLogin ? handleLogin : handleRegister}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
