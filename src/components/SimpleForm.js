import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ReactPlayer from 'react-player/lazy'
import ReactAudioPlayer from 'react-audio-player';
import Warm from '../warm.mp3';

// all available config props
const config ={
  floating: true,
  enableSmoothScroll:true,
  botAvatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bot_awake.svg/480px-Bot_awake.svg.png"
};

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'serif',
  headerBgColor: '#37AF37',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  botFontColor: '#fff',
  userBubbleColor: '#FFE384',
  userFontColor: '#4a4a4a',
  
  
};

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger:'4',
      },
      {
          id:'4',
          message:"Let's play riddles! Shall we?",
          trigger: '5'
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Yes', trigger: '6' },
          { value: 2, label: 'No', trigger: '7' },
         
        ],
      },
      {
          id : '6',
          message:"What has to be broken before you can use it?",
          trigger:'8'
      },
      {
        id: '8',
        user: true,
        validator: (value) => {
          if (value != "egg") {
            return 'No, It is something we eat.';
          }
          return true;
        },
        trigger: '9',
      },
      {
          id:'9',
          message:"Correct ans 🥳! You are genius!",
          trigger:'10',
      },
      {
        id: '10',
        message:"Wanna play more?",
       trigger:'11'
      },
      {
          id:'11',
        options: [
            { value: 1, label: 'Yes', trigger: '12' },
            { value: 2, label: 'No', trigger: '7' },
           
          ],
      },
      {
          id:'12',
          message:"This is one, gonna be difficult 🤓",
          trigger:"13"
      },
      {
        id:'13',
        message:"What can you catch, but not throw?",
        trigger:"14"
    },
      {
          id:'14',
          user: true,
        
          validator: (value) => {
          if (value != "cold") {
            return 'No, I can\'t help you. I\'m sick 🥶.';
          }
          return true;
        },
        trigger: '15',
      },
      {
          id:'15',
          message:'It was great 🤩 {previousValue}'
      },
      {
          id:"7",
          message:"Okay! I have better things for you 😋!",
          trigger:"16"
      },
      {
        id: '16',
        options: [
          { value: 1, label: 'Watch Cartoon🐻‍', trigger: '17' },
          { value: 2, label: 'Play Music🎼', trigger: '18' },
        
        ],
      },
      {
id:"17",
component: (
    <div> <ReactPlayer url='https://www.youtube.com/watch?v=NsqjAA6Tk-Q' />
  </div>
),
trigger:'4'
      },
      {
          id:"18",
        component: (
             <ReactAudioPlayer
            src={Warm}
            autoPlay ={true}
            controls
    
          /> 
         
          ),
          trigger:'4'
      },
      

];
class SimpleForm extends Component {
  render() {
  
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Hello  🖐"
      recognitionEnable={true}
      speechSynthesis={{ enable: true, lang: 'en' }}
      steps={steps} 
      {...config}
    />
    </ThemeProvider>
    );
  }
       
}
export default SimpleForm;