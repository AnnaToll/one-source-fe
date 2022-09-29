import React, { useState } from 'react';
import Chatbot from './Chatbot';

import './chat.css';
import { AiOutlineCloseCircle, AiOutlineSmile } from 'react-icons/ai';

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
                <p onClick={ () =>setShow(!show)}><AiOutlineCloseCircle /></p>
                : 
                <p onClick={ () =>setShow(!show)}><AiOutlineSmile /></p>
                }
                
            </div>

        </div>
    );
};

export default ChatButton;