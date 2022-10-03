import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import LoginContainer from './components/LoginContainer';
import AdminRoutes from './components/AdminRoutes';
import Admin from './components/Admin';
import Footer from './components/Footer';
import Test from './components/Test';

function AppRoutes() {

  const [toggleHide, setToggleHide] = useState('hidden');
  const [loggedIn, setLoggedIn] = useState(false);
  const navPages = useRef([]);
  
  const handleClick = () => {
    toggleHide === 'hidden' ? setToggleHide('flex') : setToggleHide('hidden');
  };

  const getNewToken = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/refresh`, { credentials: 'include' });
    const data = await response.json();
    if (sessionStorage.getItem('accessToken')) {
      sessionStorage.removeItem('accessToken');
    }
    if (response.status === 200) {
      sessionStorage.setItem('accessToken', data.accessToken);
      setLoggedIn(true);
    } else {
      if (localStorage.getItem('expiration')) {
        localStorage.removeItem('expiration');
      }
      setLoggedIn(false);
    }
  };

  const checkExpiration = () => {
    if (localStorage.getItem('expiration')) {
      const now = Date.now();
      if (now < localStorage.getItem('expiration')) {
        if (sessionStorage.getItem('accessToken')) {
          const token = jwt_decode(sessionStorage.getItem('accessToken'));
          if (now < token.exp) {
            setLoggedIn(true);
          } else {
            getNewToken();
          }
        } else {
          getNewToken();
        }
      }
    }
  };


  const checkExpirationTimeout = useCallback(() => {
    setTimeout(() => {
      checkExpiration();
      checkExpirationTimeout();
    }, 60 * 60 * 1000);
  });

  
  useEffect(() => {
    
    checkExpiration();
    checkExpirationTimeout();
  
    return () => {
      clearTimeout(checkExpirationTimeout);
    };
  }, []);

  useEffect(() => {
    if (loggedIn === true && !sessionStorage.getItem('accessToken')) {
      getNewToken();
    } 
  });

  return (
      <Router>
        
        <LoginContainer toggleHide={toggleHide} setToggleHide={setToggleHide} handleClick={handleClick} setLoggedIn={setLoggedIn} />
        <Header handleClick={handleClick} loggedIn={loggedIn} setLoggedIn={setLoggedIn} navPages={navPages} />
        <div ref={el => navPages.current[0] = el} className="Page-Home"><Home /></div>

        <Routes>
          <Route path='/' element={<App navPages={navPages} />} />
          <Route element={<AdminRoutes loggedIn={ loggedIn }  />}>
              <Route path='/admin/*' element={<Admin setLoggedIn={ setLoggedIn } navPages={navPages} />} />
          </Route>          
        </Routes>

        <div className="Page-Footer"><Footer /></div>
        
      </Router>
  );
}

export default AppRoutes;
