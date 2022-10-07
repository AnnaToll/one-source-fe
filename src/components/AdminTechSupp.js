
import { Navigate } from 'react-router-dom';
import styles from './live-chat.css';
import jwt_decode from 'jwt-decode';
import { connect, io } from 'socket.io-client';
import { useEffect, useState, useCallback } from 'react';

const socket = io.connect(process.env.REACT_APP_API_ADDRESS);
// const socket2 = io(process.env.REACT_APP_API_ADDRESS);



const AdminTechSupp = () => {

    const [isActive, setIsActive] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [message, setMessage] = useState();
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     if (socket.connected) {
            
    //     }

    // });

    useEffect(() => {
        if (socket.connected) {
            console.log('connected to user-socket');
            setIsActive(true);
        } else {
            console.log('not connected to user-socket');
        }

    }, []);

    const connectToAgent = () => {
        let agent;
        socket.emit('chat-user-start', (socket.id));
        socket.on('welcome-msg', (msg, agentName) => {
            let agent = agentName;
            const message = {
                type: 'other',
                msg: `${agent}: ${msg}`
            };
            setMessages(message);
        });
        socket.on('message', (msg) => {
            const copy = [...messages];
            const message = {
                type: 'other',
                msg: `${agent}: ${msg}`
            };
            copy.push(message);
            setMessages(copy);
        });
    };

    const checkQueu = useCallback(() => {
        setTimeout(function(){
            socket.emit('queue-req', (socket.id));
            socket.on('queue-res', (queue, msg) => {
                if (queue !== 0) {
                    const message = {
                        type: 'other',
                        msg: msg
                    };
                    setMessages(message);
                    checkQueu();
                } else {
                    connectToAgent();
                }

            });
        }, 5000);
    });

    const handleClickActivate = (e) => {
        if (!socket.connected) return;
        e.preventDefault();

        socket.on('connect', () => {
            setId(socket.id);
            socket.emit('chat-user-start', (socket.id));
            socket.on('queue-data', (queue, msg) => {
                if (queue !== 0) {
                    const message = {
                        type: 'other',
                        msg: msg
                    };
                    setMessages(message);
                    checkQueu();
                } else {
                    connectToAgent();
                }
            });
        });
        setIsActive(true);
    };


    const handleSubmit = () => {
        socket.emit('message-user', message);
        const copy = [...messages];
        const message = {
            type: 'self',
            msg: `Me: ${message}`
        };
        copy.push(message);
        setMessages(copy);
        setMessage('');
    };


    return (
        !jwt_decode(sessionStorage.getItem('accessToken')).accessLevel.includes('support')
        ?
            <Navigate to='/admin'/>
        :
            <> 
                <h2>Tech support</h2>
                { error ? <p className="error">{error}</p> : '' }
                { success ?  <p className="success">{success}</p> : '' }
                <section className='chat-support'>
                    <div className='messages-container'>
                        { messages.map( (message, index) => (
                            <p key={index} className={`btn bg-grey message ${message.type}`}>
                                {message.msg}
                            </p>
                        ))}
                        <p className='support'></p>
                    </div>
                    <div className='chat-input-container'>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                type='text'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                            />
                            <button className='btn bg-grey'>Send</button>
                        </form>
                    </div>
                </section>
                <button 
                    onClick={ handleClickActivate } 
                    className='btn' >
                        { isActive ? 'Disconnect' : 'Activate' } Chat
                </button>
            </>
    );
};

export default AdminTechSupp;