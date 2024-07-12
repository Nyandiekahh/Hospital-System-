import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);

  const login = (user, role) => {
    setCurrentUser(user);
    setRole(role);
  };

  const logout = () => {
    setCurrentUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
