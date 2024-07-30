import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const saveUser = (user) => {
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const user = { username, password };
      saveUser(user);
      router.replace('/login');
    } catch (err) {
      console.error('Erreur lors de l\'inscription:', err);
      setError('Erreur de connexion');
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;