import React, { useState } from 'react';

import { styles } from './styles';

const Pug = props => {
    const [hovered, setHovered] = useState(false)
     
    return (
        <div style={props.style}>
            <div
            className='transition-3'
                style={{
                    ...styles.pugHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hey! Its puggy!
            </div>

            <div
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                style={{
                    ...styles.chatWithPugButton,
                    ...{ border: hovered ? '1px solid #ffffff' : '4px solid #ffffff'}
                }}
            />
        </div>
    )
}

export default Pug;