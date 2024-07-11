import React, { useState } from 'react';
import '../styles/Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const credentials = {
      admin: 'admin123',
      practitioner: 'practitioner123',
      patient: 'patient123',
    };

    if (password === credentials[role]) {
      setMessage(`Welcome, ${role}!`);
    } else {
      setMessage('Incorrect password');
    }
  };

  const getIdentifierLabel = () => {
    switch (role) {
      case 'admin':
        return 'Login ID';
      case 'practitioner':
        return 'Medical ID';
      case 'patient':
        return 'Birth Certificate Number';
      default:
        return 'Identifier';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Hospital Management System</h2>
      <div className="login-form">
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="practitioner">Medical Practitioner</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <label>
          {getIdentifierLabel()}:
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </label>
        <label className="password-label">
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </label>
        <button onClick={handleLogin}>Login</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
