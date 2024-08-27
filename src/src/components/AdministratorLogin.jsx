import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Use your CSS for styling

const AdministratorLogin = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Administrator Login:', userID, password);
  };

  return (
    <div className="login-form-container">
      <h2>Administrator Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userID">User ID:</label>
        <input
          type="text"
          id="userID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
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
    </div>
  );
};

export default AdministratorLogin;
