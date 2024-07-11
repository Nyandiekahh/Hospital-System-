import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLanding from './pages/AdminLanding';
import PractitionerLanding from './pages/PractitionerLanding';
import PatientLanding from './pages/PatientLanding';
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
              <ProtectedRoute>
                <AdminLanding />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/practitioner" 
            element={
              <ProtectedRoute>
                <PractitionerLanding />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/patient" 
            element={
              <ProtectedRoute>
                <PatientLanding />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
