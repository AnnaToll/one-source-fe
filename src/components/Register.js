import { useState } from 'react';

function Register({ setCurrent, setUser, setToggleHide }) {
  const [loginDetails, setLoginDetails] = useState({});

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetails);
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginDetails),
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/register`, settings);
      const data = await response.json();
      if (response.status === 200) {
        setError('');
        setUser(data);
        setLoginDetails({});
        setSuccess(`Welcome ${data.name}! You are now logged in.`);
        setTimeout(() => {
          setToggleHide('hidden');
          setSuccess('');
        }, 1300);
      } else if (response.status === 409) {
        setError(data.error);
      } else {
        setError(`Oops, something went wrong! Error code: ${response.status}. Please try again or contact us for more information.`);
      }
    } catch (error) {
      setError('Oops, something went wrong! Please try again or contact us for more information.');
    }
  };

  return (
    <>
      <h2>Register</h2>
      { error ? <p className="error">{error}</p> : '' }
      { success ? <p className="success">{success}</p> : '' }
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={loginDetails.name || ''}
            onChange={(e) => setLoginDetails({ ...loginDetails, name: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={loginDetails.email || ''}
            onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={loginDetails.phone || ''}
            onChange={(e) => setLoginDetails({ ...loginDetails, phone: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="pwd"
            value={loginDetails.pwd || ''}
            onChange={(e) => setLoginDetails({ ...loginDetails, pwd: e.target.value })}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <h5>
        Or
        <span className="strong" onClick={() => setCurrent('login')}>login</span>
      </h5>
    </>
  );
}

export default Register
