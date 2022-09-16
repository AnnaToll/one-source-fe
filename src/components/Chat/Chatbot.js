import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Puggy to the rescue!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Whats should I call you?',
        trigger: '2',
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: 'hi {previousValue}, how can I help you?',
        trigger: '4',
    }, {
        id: '4',
        options: [
            {value: 1, label: 'Bark at us'},
            {value: 2, label: 'Voff are we?'},
        ],
        end: true
    }
];

const theme = {
    background: '#ffffff',
    headerBgColor: '#005794',
    headerFontSize: '20px',
    botBubbleColor: '#005794',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#005794',
    userFontColor: 'white',
};

const config = {
    botAvatar: 'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    floating: true,
};

function Chat () {
    return (
        <div className="Chatbot">
            <ThemeProvider theme={theme}>
                <Chatbot steps={steps} />
            </ThemeProvider>
            
        </div>
    );
}

export default Chat;