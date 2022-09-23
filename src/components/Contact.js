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
    <section className="contact-container">
        
        <h1>Contact</h1>

        
        <p>Adress:</p>
        <p>One Sourcevägen 1</p>
        <p>111 11 Stockholm</p>
        <p>Phone: +4611-111 111</p>
        
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={ (e) => setName(e.target.value)} value={name}/>
          <input type='email'onChange={ (e) => setEmail(e.target.value)} value={email}/>
          <input type='text' onChange={ (e) => setMessage(e.target.value)} value={message}/>
          <button>Send</button>
        </form>

    </section>
  );
}

export default Contact;