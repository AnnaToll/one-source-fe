import React from 'react';

import PugEngine from './PugEngine';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat Pug to the rescue!
        </p>
      </header>
      <div>
        <PugEngine />
      </div>
    </div>
  );
}

export default App;