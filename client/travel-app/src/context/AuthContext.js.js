// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticationError, setAuthenticationError] = useState(false);

  const handleLogin = async (email, password, loginAsAdmin) => {
    const endpoint = loginAsAdmin ? '/Admin_login' : '/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setAuthenticationError(false);
        return { success: true };
      } else {
        setAuthenticationError(true);
        return { success: false };
      }
    } catch (error) {
      setAuthenticationError(true);
      return { success: false, error: 'An error occurred during login. Please try again later.' };
    }
  };

  return (
    <AuthContext.Provider value={{ authenticationError, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
