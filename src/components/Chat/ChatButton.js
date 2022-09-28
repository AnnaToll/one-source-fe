import React, { useState } from 'react';
import Chatbot from './Chatbot';

import './chat.css';

const ChatButton = () => {
    const [show, setShow] = useState(true);
    return (
        <div className='Chat-Button'>
            {
                show?<Chatbot />:null
            }
            <p onClick={ () =>setShow(!show)}>Hello! Need help?</p>
        </div>
    );
};

export default ChatButton;