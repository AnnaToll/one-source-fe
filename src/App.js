import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import LoginContainer from './components/LoginContainer';
import Consultants from './components/Consultants';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatButton from './components/Chat/ChatButton';
import Test from './components/Test';

function App() {

  const [toggleHide, setToggleHide] = useState('hidden');
  const [loggedIn, setLoggedIn] = useState(false);
  const navPages = useRef([]);
  
  const handleClick = () => {
    toggleHide === 'hidden' ? setToggleHide('flex') : setToggleHide('hidden');
  };

  // const getNewToken = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/refresh`, { credentials: 'include' });
  //   const data = await response.json();
  //   if (response.status === 200) {
  //     sessionStorage.setItem('accessToken', data.accessToken);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // };
  
  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      setLoggedIn(true);
    } 
  }, []);

  // useEffect(() => {
  //   if (loggedIn === true && !sessionStorage.getItem('accessToken')) {
  //     getNewToken();
  //   } 
  // });

  const handleClickDeleteCookies = async () => {
    await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/deleteCookies`, { credentials: 'include' });
  };

  return (
    <div className="App">
      <Router>
        
        <LoginContainer toggleHide={toggleHide} setToggleHide={setToggleHide} handleClick={handleClick} setLoggedIn={setLoggedIn} />
        <Header handleClick={handleClick} loggedIn={loggedIn} setLoggedIn={setLoggedIn} navPages={navPages} />
        {/*<Test />*/}
        {/* <ChatButton /> */}

        <div className="Page-wrapper"> 
          <div ref={el => navPages.current[0] = el} className="Page-Home"><Home /></div>
          <button onClick={ handleClickDeleteCookies } >Clear all Cookies</button>
          <div ref={el => navPages.current[1] = el} className="Page-About"><About /></div>
          <div ref={el => navPages.current[2] = el} className="Page-Consultants"><Consultants /></div>
          <div ref={el => navPages.current[3] = el} className="Page-Contact"><Contact /></div>
          <div className="Page-Footer"><Footer /></div>

        </div>
        
      </Router>
    </div>
  );
}

export default App;
