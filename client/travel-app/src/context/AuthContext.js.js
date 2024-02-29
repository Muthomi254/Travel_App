// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

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

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
  
      if (!accessToken) {
        // If the token is not available, consider it a failure
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: 'No access token found. Please log in.',
        });
  
        return { success: false };
      }
  
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        // Clear the access token upon successful logout
        localStorage.removeItem('access_token');
  
        // Show success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful',
          text: 'You have been successfully logged out.',
        });
  
        return { success: true };
      } else {
        // Handle logout failure
  
        // Show error message using Swal
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: 'An error occurred during logout. Please try again.',
        });
  
        return { success: false };
      }
    } catch (error) {
      // Handle unexpected errors during logout
  
      // Show error message using Swal
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: 'An error occurred during logout. Please try again later.',
      });
  
      return { success: false, error: 'An error occurred during logout. Please try again later.' };
    }
  };
  
  return (
    <AuthContext.Provider value={{ authenticationError, handleLogin ,handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
};
