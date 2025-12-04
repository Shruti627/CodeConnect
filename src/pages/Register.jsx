import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Fetch users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      setMessage('User already exists!');
      return;
    }

    // Add new user to array and save to localStorage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message and redirect to login
    setMessage('Registration successful! Redirecting to login...');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && (
        <p className={message.includes('successful') ? 'success' : 'error'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
