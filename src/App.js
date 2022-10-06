import React from 'react';
import './App.css';

import TheTeam from './components/TheTeam';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatButton from './components/Chat/ChatButton';

function App({ navPages }) {

  return (
    <div className="App">
      <ChatButton />
      <main className="Page-wrapper">
        <div ref={el => navPages.current[1] = el} className="Page-About"><About /></div>
        <div ref={el => navPages.current[2] = el} className="Page-TheTeam"><TheTeam /></div>
        <div ref={el => navPages.current[3] = el} className="Page-Contact"><Contact /></div>
        <div className="Page-Footer"><Footer /></div>
      </main>
    </div>
  );
}

export default App;
