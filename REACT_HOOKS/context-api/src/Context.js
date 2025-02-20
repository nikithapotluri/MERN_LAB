import React, { createContext, useState } from 'react';
export const Context = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <Context.Provider value={{ theme, toggleTheme }}> {children}    </Context.Provider>
  )};
