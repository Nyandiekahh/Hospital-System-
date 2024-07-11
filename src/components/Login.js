import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../styles/Login.css';
import mockData from '../mockData';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo purposes
    const credentials = {
      admin: { loginId: 'admin', password: 'admin123' },
      practitioner: { loginId: 'practitioner', password: 'practitioner123' },
      patient: mockData.patients.find(patient => patient.loginId === loginId && patient.password === password)
    };

    if (role === 'patient' && credentials[role]) {
      login();
      navigate(`/${role}`, { state: { loginId } });
    } else if (credentials[role] && credentials[role].loginId === loginId && credentials[role].password === password) {
      login();
      navigate(`/${role}`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Hospital Management System</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="practitioner">Medical Practitioner</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div>
          <label>{role === 'admin' ? 'Login ID' : role === 'patient' ? 'Birth Certificate Number' : 'Medical ID'}:</label>
          <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
