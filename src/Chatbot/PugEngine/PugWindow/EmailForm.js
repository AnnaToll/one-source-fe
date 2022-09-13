import React, { useState } from "react";
import axios from "axios";

import { styles } from "../styles";

import { AiOutlineLoading } from 'react-icons/ai'

import Pug from "../Pug";

const Emailform = props => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback){
        axios.put(
            'https://api.chatengine.io/users/',
            {
                username: email,
                email: email,
                secret: email
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
        .catch(e =>console.log('Get or create user error', e))
    }

    function getOrCreateChat(callback){
        axios.put(
            'https://api.chatengine.io/chats/',
            {usernames: [email, "Puggy" ], is_direct_chat: true},
            {headers: {
                "Project-ID": process.env.REACT_APP_CE_PRIVATE_KEY,
                "User-Name": email,
                "User-Secret": email
            }}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create chat error', e))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)

        console.log('Sending email', email)

        getOrCreateUser(
            user => {
                props.setUser && props.setUser(user)
                getOrCreateChat(chat => {
                    setLoading(false)
                    props.setChat && props.setChat(chat)
                })
            }
        )
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                height: '100%',
                opacity: '1',
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            <AiOutlineLoading 
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Pug 
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%'
                    }}
                />

                <div style={styles.topText}>
                    How can I help you?
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top:'19.75%'}}
                >
                    <input 
                        style={styles.emailInput}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Your email'
                    />
                </form>

                <div style={styles.bottomText}>
                    Enter your email <br /> to get started
                </div>
            </div>

        </div>
    )
}

export default Emailform