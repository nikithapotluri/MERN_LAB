import React, { createContext, useState } from 'react';
export const Context = createContext();
export const ThemeProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  return (
    <Context.Provider value={{ isLoggedIn, toggleLogin }}> {children} </Context.Provider>
  );
};