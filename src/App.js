import { useState, useEffect } from "react"
import './App.css';

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



  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello { userName }!</h2>
        <h1>Welcome to One Source.</h1>
      </header>
    </div>
  );
}

export default App;
