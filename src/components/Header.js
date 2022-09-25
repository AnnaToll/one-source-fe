import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function Header({ handleClick, user, setUser, navPages }) {

  const [headerClass, setHeaderClass] = useState('');
  const [linkClass, setLinkClass] = useState([
    'active',
    '',
    '',
    ''
  ]);

  const handleNavClick = (num) => {
    window.removeEventListener('scroll', handleScroll);
    navPages.current[num].scrollIntoView({ behavior: 'smooth' });
    setClass(num);
    setTimeout(function(){
      window.addEventListener('scroll', handleScroll);
    }, 1000);
  };

  const setClass = (num) => {
    setLinkClass(prevClass => {
      for (let i = 0; i < linkClass.length; i++) {
        prevClass[i] = '';
      }
      prevClass[num] = 'active';
      return [...prevClass];  
    }); 
  };

  const handleScroll = useCallback(() => {
    const current = window.pageYOffset + 1;
    if ( current > window.innerHeight - 100) {
      setHeaderClass('scrolled-down');
    } else {
      setHeaderClass('');
    }

    if (navPages.current[0].offsetTop <= current && navPages.current[1].offsetTop > current)
      setClass(0);
    else if (navPages.current[1].offsetTop <= current && navPages.current[2].offsetTop > current)
      setClass(1);
    else if (navPages.current[2].offsetTop <= current && navPages.current[3].offsetTop > current)
      setClass(2);
    else
      setClass(3);

  }, []);
  
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={headerClass}>
      <img className="logo" src={require('../img/logo.png')} />
      <section className='logo-horizontal'>
        <span>1 </span>
        <span>SOURCE</span>
      </section>
      <nav>
        <span onClick={() => handleNavClick(0)} className={ linkClass[0] } >Home</span>
        <span onClick={() => handleNavClick(1)} className={ linkClass[1] } >About</span>
        <span onClick={() => handleNavClick(2)} className={ linkClass[2] } >The team</span>
        <span onClick={() => handleNavClick(3)} className={ linkClass[3] } >Contact</span>
        {
          user
          ? 
            <div>Hi {user.name}!  |  <span onClick={() => setUser(null)}>Logout</span></div>
          : 
            <div className="login-icon-container" onClick={handleClick}>
              <i className="bi bi-person-circle" />
            </div>
          }
      </nav>
    </header>
  );
}

export default Header;
