import React from 'react';
import '../styles/SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-page-container">
      <h2>Signup</h2>
      <div className="signup-card">
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
