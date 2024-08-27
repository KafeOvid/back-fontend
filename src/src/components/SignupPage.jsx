import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/SignupPage.css'; // Use your CSS for styling

const SignupPage = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/signup', {
        fullname,
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
    <div className="signup-page-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
