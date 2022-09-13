import { useState } from "react"
import Login from "./Login"
import Register from "./Register"

const LoginContainer = ({ toggleHide, handleClick }) => {

    const [current, setCurrent] = useState('login')

    return (
        <div className={`${toggleHide} dark-fs`} >
            <div onClick={handleClick} className='fs' />
            <section className="login-container">
                {
                    current === 'login' ?
                    <Login setCurrent={setCurrent} />
                    :
                    <Register setCurrent={setCurrent} />
                }
            </section>
        </div>
    )
}

export default LoginContainer