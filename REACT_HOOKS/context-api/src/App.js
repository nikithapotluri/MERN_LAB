import React from 'react'
import { ThemeProvider } from './Context';
import  ThemeChange  from './ThemeChange';
function App() {
  return (
    <ThemeProvider> <ThemeChange /></ThemeProvider>
  )};
export default App;