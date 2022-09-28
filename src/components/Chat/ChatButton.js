import React, { useState } from 'react';
import Chatbot from './Chatbot';

import './chat.css';

const ChatButton = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='Chat-Button'>
            {
                show?<Chatbot setShow={setShow}/>:null
            }
            <div >
                {
                    show === true ? 
                <p onClick={ () =>setShow(!show)}>Close</p>
                : 
                <p onClick={ () =>setShow(!show)}>Hello! Need help?</p>
                }
                
            </div>

        </div>
    );
};

export default ChatButton;