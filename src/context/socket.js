import { connect, io } from 'socket.io-client';
import React from 'react';

export const socket = io.connect(process.env.REACT_APP_API_ADDRESS);
export const SocketContext = React.createContext();