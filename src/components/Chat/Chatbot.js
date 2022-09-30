import React, { Component } from 'react';
import './chat.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

//Styles
const theme = {
  background: '#fff',
  fontFamily: 'Graphik Light',
  headerBgColor: '#17A398',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#E1987E',
  botFontColor: '#fff',
  userBubbleColor: '#17A398',
  userFontColor: '#fff',
  botAvatar: 'bot.jpg'
};

class App extends Component {
  render() {
    const steps = [
      {
        id: '0',
        message: 'Hello, what\'s your name?',
        trigger: '1'
      },
      {
        id: '1',
        user: true,
        trigger: '2'
      },
      {
        id: '2',
        message: 'How may I help you {previousValue}?',
        trigger: '3'
      },
      {
        id: '3',
        options: [
          { value: 1, label: 'About us?', trigger: 'about' },
          { value: 2, label: 'Who are we?', trigger: 'team' },
          { value: 3, label: 'School?', trigger: 'school' }
        ]
      },
      {
        id: 'about',
        message: 'One Source is a school project, an application that combines a Backend with a Frontend, a project from an idea to a finished product',
        trigger: 4
      },
      {
        id: 'team',
        message: 'Our team consists of four students: Anna, Johanna, Pernilla och Isabelle.',
        trigger: 4
      },
      {
        id: 'school',
        message: 'We are student at Jensen Education in Stockholm, Sweden and we are studying Frontend development',
        trigger: 4
      },
      {
        id: '4',
        message: 'Want more info?',
        trigger: 5
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Yes', trigger: '3' },
          { value: 2, label: 'No', trigger: '6' },
          { value: 3, label: 'Yes but with a human', trigger: '7' },
        ]
      },
      {
        id: '6',
        message: 'Have a nice day!',
        end: true
      },
      {
        id: '7',
        message: 'I will fetch a real human for you !',
        end: true,
      },
    ];

    return (
      <div className='App'>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle={'One Source Support'}
            placeholder={'Write here'}
            recognitionEnable={true}
            botDelay={1000}
            steps={steps}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;