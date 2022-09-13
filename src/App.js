// import { useState, useEffect } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consultants from "./components/Consultants";
import Home from "./components/Home";

// const baseLink = process.env.REACT_APP_API_ADDRESS || "http://localhost:3001"

function App() {

  // const [userName, setUserName] = useState('')

  // const getName = async () => {
  //   const response = await fetch(`${baseLink}/api/v0/user-name`);
  //   const user = await response.json();
  //   console.log(user)
  //   setUserName(user.name)

  // }
  // useEffect(() => {
  //   getName()
  // }, [])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultants" element={<Consultants />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h2>Hello {userName}!</h2>
    //     <h1>Welcome to One Source.</h1>
    //   </header>
    // </div>
  );
}

export default App;
