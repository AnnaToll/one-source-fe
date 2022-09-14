import { useState } from "react"

const Login = ({ setCurrent }) => {

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        pwd: ''
    })

    const handleSubmit = async (e) => {
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: loginDetails
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/authorize`, settings)
            const data = await response.json()
            if (data.isAuthorized) {

            } else {

            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={ loginDetails.email || '' }
                        onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="pwd"
                        value={ loginDetails.pwd || '' }
                        onChange={(e) => setLoginDetails({ ...loginDetails, pwd: e.target.value })}
                        required
                    />
                </label>
                <button type="submit">Sign in</button>
            </form>
            <h5>Or <span className="strong" onClick={() => setCurrent('register')} >register an account</span></h5>
        </>
    )
}

export default Login