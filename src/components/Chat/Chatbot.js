import React, { Component } from 'react';
import './chat.css';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

//Styles
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#17A398',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#17A398',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#F38D68',
  botAvatar: "bubba.jpg"
};

class App extends Component {
  render() {
    const steps = [
      {
        id: "0",
        message: "Hello, what's your name?",
        trigger: "1"
      },
      {
        id: "1",
        user: true,
        trigger: "2"
      },
      {
        id: "2",
        message: "How may I help you {previousValue}?",
        trigger: "3"
      },
      {
        id: "3",
        options: [
          { value: 1, label: "About us?", trigger: "about" },
          { value: 2, label: "Who are we?", trigger: "team" },
          { value: 3, label: "Contact information?", trigger: "contact" }
        ]
      },
      {
        id: "about",
        message: "This is One Source...",
        trigger: 4
      },
      {
        id: "team",
        message: "Hello from Anna, Johanna, Nilla och Isabelle",
        trigger: 4
      },
      {
        id: "contact",
        message: "Phone number",
        trigger: 4
      },
      {
        id: "4",
        message: "Need more help?",
        trigger: 5
      },
      {
        id: "5",
        options: [
          { value: 1, label: "Yes", trigger: "3" },
          { value: 2, label: "No", trigger: "6" },
        ]
      },
      {
        id: "6",
        message: "Have a nice day!",
        end: true
      }
    ];

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle={"One Source Support"}
            placeholder={"Write here"}
            recognitionEnable={true}
            botDelay={2000}
            steps={steps}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;