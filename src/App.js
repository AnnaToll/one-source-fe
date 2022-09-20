import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import {  BrowserRouter as Router,} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginContainer from "./components/LoginContainer";
import Consultants from "./components/Consultants";
import PugEngine from "./Chatbot/PugEngine";
=======
=======
>>>>>>> dadd638d20793bdc53a851ea7c08753a7dd57fc8
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LoginContainer from './components/LoginContainer';
import Consultants from './components/Consultants';
import Chat from './components/Chat/Chatbot';
<<<<<<< HEAD
>>>>>>> 6fc0ef375da8c70a37e956f8018cad706b1d01ef
=======
>>>>>>> dadd638d20793bdc53a851ea7c08753a7dd57fc8

function App() {
  const [toggleHide, setToggleHide] = useState('hidden');

  const handleClick = () => {
    toggleHide === 'hidden' ? setToggleHide('flex') : setToggleHide('hidden');
  };

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <div className="test" />
        <LoginContainer toggleHide={toggleHide} setToggleHide={setToggleHide} handleClick={handleClick} setUser={setUser} />
        <Header handleClick={handleClick} user={user} setUser={setUser} />
        <Home />
        <div className="Chat"><Chat /></div>
        <Consultants />
      </Router>
    </div>
  );
}

export default App;
