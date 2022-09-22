import React from 'react';
import { useState } from 'react';
import './App.css';
import {  BrowserRouter as Router,} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import LoginContainer from "./components/LoginContainer";
import Consultants from "./components/Consultants";
import About from "./components/About";
import Contact from './components/contact';

function App() {
  const [toggleHide, setToggleHide] = useState('hidden');

  const handleClick = () => {
    toggleHide === 'hidden' ? setToggleHide('flex') : setToggleHide('hidden');
  };

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        
        <LoginContainer toggleHide={toggleHide} setToggleHide={setToggleHide} handleClick={handleClick} setUser={setUser} />
        <Header handleClick={handleClick} user={user} setUser={setUser} />
        
        <div className="Page-wrapper">
          <div className="Page-Home"><Home /></div>
          <div className="Page-About"><About /></div>
          <div className="Page-Consultants"><Consultants /></div>
          <div className="Page-Contact"><Contact /></div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
