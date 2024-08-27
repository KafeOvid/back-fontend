import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/LoginForm.css'; // Use your CSS for styling

const PublicLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        username,
        password
      });
      setMessage(response.data.message); // Set success message
      setError(''); // Clear any previous errors
    } catch (err) {
      setMessage(''); // Clear any previous messages
      if (err.response && err.response.data) {
        setError(err.response.data.error); // Set error message from server response
      } else {
        setError('An error occurred. Please try again.'); // Generic error message
      }
    }
  };

  return (
    <div className="login-form-container">
      <h2>Public Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PublicLogin;
