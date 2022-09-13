import { useState, useEffect } from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginContainer from "./components/LoginContainer";
import PugEngine from "./Chatbot/PugEngine";

function App() {

  const [userName, setUserName] = useState('')

  const getName = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/user-name`);
    const user = await response.json();
    console.log(user)
    setUserName(user.name)

  }
  useEffect(() => {
    getName()
  }, [])


  const [toggleHide, setToggleHide] = useState("hidden")

  const handleClick = () => {
      toggleHide === "hidden" ? setToggleHide("flex") : setToggleHide("hidden")
  }

  return (
    <div className="App">
      <Router>
        <LoginContainer toggleHide={ toggleHide } handleClick={ handleClick } />
        <Header handleClick={ handleClick } />
        <Home />
        <PugEngine />
      </Router>
    </div>
  );
}

export default App;
