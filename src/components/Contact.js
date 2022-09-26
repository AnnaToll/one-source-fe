import './components.css';
import { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='contact-container'>
      <div className='inner-container'>
        <h1>Contact</h1>

        <div className='adress'>
        <p>Adress:</p>
        <p>One Sourcevägen 1</p>
        <p>111 11 Stockholm</p>
        <p>Phone: +4611-111 111</p>
        </div>
        
        <form className='contactForm' onSubmit={handleSubmit}>
          <input placeholder='Name' type='text' onChange={ (e) => setName(e.target.value)} value={name}/>
          <input placeholder='Email' type='email'onChange={ (e) => setEmail(e.target.value)} value={email}/>
          <textarea placeholder='Enter message here' rows="5" cols="40" type='text' onChange={ (e) => setMessage(e.target.value)} value={message}/>
          
          <button>Send</button>
        </form>
        </div>
    </section>
  );
}

export default Contact;