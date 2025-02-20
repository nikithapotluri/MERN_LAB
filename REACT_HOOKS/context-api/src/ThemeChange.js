import React, { useContext } from 'react';
import { Context } from './Context';
function ThemeChange(){
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff', padding: '10px', border:'solid 5px blue', display:'flex', gap:'10px'}}>
    <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light '} Theme
      </button>
    </div>
  )};
export default ThemeChange;