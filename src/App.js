import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Loginpage from './components/loginpage/loginpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AppRoutes/>
      ) : (
        <Loginpage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;