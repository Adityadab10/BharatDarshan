import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data with updated name
  useEffect(() => {
    const mockUser = {
      displayName: "Bharat Kumar",
      photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bharat",
      email: "bharat@example.com"
    };
    setUser(mockUser);
    setLoading(false);
  }, []);

  const value = {
    user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 