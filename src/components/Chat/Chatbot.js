import Chatbot from 'react-simple-chatbot';

const steps = [
    {
        id: '0',
        message: 'Puggy to the rescue',
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

function Chat () {
    return (
        <div className="Chatbot">
            <h2>Welcome to Puggy chat!!</h2>
            <Chatbot steps={steps} />
        </div>
    );
}

export default Chat;