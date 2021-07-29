import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetch(
        'https://inventory-management-system-be-mqsje.ondigitalocean.app/content/users',
        {
          headers: {
            authorization: `Beared ${token}`,
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => setAuth(res.data));
    }
  }, [token, loggedIn]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
