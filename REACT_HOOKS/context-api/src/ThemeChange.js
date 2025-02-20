import React, { useContext } from 'react';
import { Context } from './Context';
function ThemeChange() {
  const { isLoggedIn, toggleLogin } = useContext(Context);
  return (
    <div style={{ padding: '10px',display: 'flex',gap: '10px'}}>
      <h2>{isLoggedIn ? 'You are Logged in!' : 'You are Logged out!'}</h2>
      <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
}
export default ThemeChange