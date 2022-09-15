import { useState, useEffect } from "react"
import Login from "./Login"
import Register from "./Register"

const LoginContainer = ({ toggleHide, setToggleHide, handleClick, setUser }) => {

    const [current, setCurrent] = useState('login')

    return (
        <div className={`${toggleHide} dark-fs`} >
            <div onClick={handleClick} className='fs' />
            <section className="login-container">
                {
                    current === 'login' ?
                    <Login setCurrent={setCurrent} setUser={setUser} setToggleHide={setToggleHide} />
                    :
                    <Register setCurrent={setCurrent} setUser={setUser} setToggleHide={setToggleHide} />
                }
            </section>
        </div>
    )
}

export default LoginContainer