import { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import './components.css';

function LoginContainer({
  toggleHide, setToggleHide, handleClick, setLoggedIn,
}) {
  const [current, setCurrent] = useState('login');

  return (
    <div className={`${toggleHide} dark-fs`}>
      <div onClick={handleClick} className="fs" />
      <section className="login-container">
        {
          current === 'login'
          ? <Login setCurrent={setCurrent} setLoggedIn={setLoggedIn} setToggleHide={setToggleHide} />
          : <Register setCurrent={setCurrent} setLoggedIn={setLoggedIn} setToggleHide={setToggleHide} />
        }
      </section>
    </div>
  );
}

export default LoginContainer;
