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

    // Hardcoded credentials for admin and practitioner
    const credentials = {
      admin: { loginId: 'admin', password: 'admin123' },
      practitioner: { loginId: 'practitioner', password: 'practitioner123' },
    };

    // Check if the role is patient and find the corresponding patient in mockData
    if (role === 'patient') {
      const patient = mockData.patients.find(patient => patient.loginId === loginId && patient.password === password);
      if (patient) {
        login(patient, 'patient');
        navigate('/patient', { state: { user: patient } });
        return;
      }
    }

    // Check for admin and practitioner login
    if (credentials[role] && credentials[role].loginId === loginId && credentials[role].password === password) {
      login(credentials[role], role);
      navigate(`/${role}`, { state: { user: credentials[role] } });
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
