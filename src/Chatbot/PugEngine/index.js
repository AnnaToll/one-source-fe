import React, { useRef, useEffect, useState } from "react";

import Pug from './Pug';
import PugWindow from "./PugWindow";

const PugEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return (
        <div ref={ref}>
            <PugWindow 
                visible={visible}
            />

            <Pug 
            onClick={() => setVisible(true)}
            style={{ 
                position: 'fixed', 
                bottom: '24px', 
                right: '24px'
            }}
            />
        </div>
    )
}

export default PugEngine;