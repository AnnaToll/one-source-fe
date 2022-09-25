import React from 'react';
import { useState, useRef } from 'react';
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


function App() {
  const [toggleHide, setToggleHide] = useState('hidden');

  const handleClick = () => {
    toggleHide === 'hidden' ? setToggleHide('flex') : setToggleHide('hidden');
  };

  const [user, setUser] = useState(null);
  const navPages = useRef([]);

  return (
    <div className="App">
      <Router>
        
        <LoginContainer toggleHide={toggleHide} setToggleHide={setToggleHide} handleClick={handleClick} setUser={setUser} />
        <Header handleClick={handleClick} user={user} setUser={setUser} navPages={navPages} />
      

        <div className="Page-wrapper"> 
          <div ref={el => navPages.current[0] = el} className="Page-Home"><Home /></div>
          <div ref={el => navPages.current[1] = el} className="Page-About"><About /></div>
          <div ref={el => navPages.current[2] = el} className="Page-Consultants"><Consultants /></div>
          <div ref={el => navPages.current[3] = el} className="Page-Contact"><Contact /></div>
          <div className="Page-Footer"><Footer /></div>
          <ChatButton />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
