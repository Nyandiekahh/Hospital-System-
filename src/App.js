import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import PractitionerDashboard from './components/PractitionerDashboard';
import PatientDashboard from './components/PatientDashboard';
import Login from './components/Login';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/practitioner" 
            element={
              <ProtectedRoute role="practitioner">
                <PractitionerDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/patient" 
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
