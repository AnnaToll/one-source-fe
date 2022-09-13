import { useState } from "react"

const Register = ({ setCurrent }) => {

    const [loginDetails, setLoginDetails] = useState({})

    const handleSubmit = async (e) => {
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: loginDetails
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/auth`, settings)
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
            <h2>Register</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={ loginDetails.name || '' }
                        onChange={(e) => setLoginDetails({ ...loginDetails, name: e.target.value })}
                        required
                    />
                </label>
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
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={ loginDetails.phone || '' }
                        onChange={(e) => setLoginDetails({ ...loginDetails, phone: e.target.value })}
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
                <button type="submit">Register</button>
            </form>
            <h5>Or <span className="strong" onClick={() => setCurrent('login')} >login</span></h5>
        </>
    )
}

export default Register