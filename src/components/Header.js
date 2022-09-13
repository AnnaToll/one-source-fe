import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ handleClick }) => {

    return (
        <header>
            <img className="logo" src={require('../img/logo.png')} />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/team'>The team</Link>
                <Link to='/contact'>Contact</Link>
                <div className="login-icon-container" onClick={ handleClick }>
                    <i className="bi bi-person-circle"></i>
                </div>
            </nav>
        </header>
    )

}

export default Header