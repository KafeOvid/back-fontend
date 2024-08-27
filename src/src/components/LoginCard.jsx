// src/components/LoginCard.jsx
import React from 'react';
import '../styles/LoginCard.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShieldAlt, FaUsers } from 'react-icons/fa'; // Import additional icons if needed

const LoginCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (role) => {
    navigate(`/login/${role}`);
  };

  return (
    <div className="login-card-container">
      <h2>Login</h2>
      <div className="login-options">
        <div className="login-option" onClick={() => handleNavigate('employee')}>
          <FaUser size={50} />
          <h3>Employee</h3>
        </div>
        <div className="login-option" onClick={() => handleNavigate('administrator')}>
          <FaShieldAlt size={50} />
          <h3>Administrator</h3>
        </div>
        <div className="login-option" onClick={() => handleNavigate('public')}>
          <FaUsers size={50} />
          <h3>Public</h3>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
