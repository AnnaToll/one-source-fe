
import { Navigate } from 'react-router-dom';
import styles from './live-chat.css';
import jwt_decode from 'jwt-decode';
import { connect, io } from 'socket.io-client';
import { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../context/socket';

const socket = io.connect(process.env.REACT_APP_API_ADDRESS);
// const socket2 = io(process.env.REACT_APP_API_ADDRESS);


const AdminSupp = ({ checkExpiration, getNewToken }) => {

    // const socket = useContext(SocketContext);
    const [isActive, setIsActive] = useState(false);
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [message, setMessage] = useState();
    const [messages, setMessages] = useState([
        {
            type: 'self',
            msg: 'Chat is active. Keep in mind that the user should not never reveal any sensitive information in the chat session. Good luck :)'
        }
    ]);


    // useEffect(() => {
    //     console.log(socket.connected);
    //     console.log(socket.id);
    //     socket.emit('test', (socket.id));
    //     socket.on('test-res', (msg) => {
    //         console.log(msg);
    //     });
    // });

    // const test = () => {
    //     console.log(socket.id);
    //     socket.on('connect', () => {
    //         // setId(socket.id);
    //         console.log(socket.id);
    //         // socket.emit('chat-adm-start', (data.key, socket.id, user.name));
    //         socket.emit('test', (socket.id));
    //         socket.on('test-res', (msg) => {
    //             console.log(msg);
    //         });
    //     });
    // };

    const handleClickActivate = async (e) => {
        e.preventDefault();
        await checkExpiration();
        const settings = {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
            },
        };
        try {
            let response;
             isActive ? 
                response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/admin/close-chat`, settings)
             :
                response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/admin/activate-chat`, settings);
            const data = await response.json();
            if (response.status !== 200) {
                setError(data.error);
            } else {
                if (isActive) {
                    setIsActive(false);
                    setUserId(null);
                } else {
                    setIsActive(true);
                    const user = jwt_decode(sessionStorage.getItem('accessToken'));
                    socket.emit('chat-adm-start', (data.key, socket.id, user.name));
                    socket.on('message', (msg, id) => {
                        if (!userId) {
                            setUserId(id);
                        }
                        const copy = [...messages];
                        const message = {
                            type: 'other',
                            msg: `User: ${msg}`
                        };
                        copy.push(message);
                        setMessages(copy);
                    });

                    setError('');
                }
            }
        } catch (error) {
            setError('Oops, something went wrong! Please try again or contact us for more information.');
        }

    };


    const handleSubmit = (e) => {
        console.log(message);
        e.preventDefault();
        socket.emit('message-adm', message);
        const copy = [...messages];
        const message = {
            type: 'self',
            msg: `Me: ${message}`
        };
        copy.push(message);
        setMessages(copy);
        setMessage('');

    };

    const handleClickNext = () => {
        socket.emit('next-user', userId);
    };


    return (
        !jwt_decode(sessionStorage.getItem('accessToken')).accessLevel.includes('support')
        ?
            <Navigate to='/admin'/>
        :
            <> 
                <h2>Support</h2>
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
                {isActive ? <button onClick={handleClickNext} className='btn bg-green'>Next user</button> : ''}
            </>
    );
};

export default AdminSupp;