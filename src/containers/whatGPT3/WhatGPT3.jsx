import React from 'react';
import './whatGPT3.css'
import { Feature } from '../../components';


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Feature title='What is GPT-3' text="
GPT-3 AI, developed by OpenAI, is a cutting-edge language model with 175 billion parameters, making it one of the largest and most powerful in existence.  Leveraging deep learning, GPT-3 processes and generates human-like text based on input, making it a key tool for various natural language processing tasks." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots" text="
Chatbots are AI-powered programs designed to engage in conversation and provide automated responses to users."/>
          <Feature  title="Knowledgebase" text="It is a centralized repository of information that serves as a reference and resource for users to access relevant data, documentation, and solutions."/>
          <Feature title="Education" text="This websites utilize artificial intelligence to deliver personalized and adaptive learning experiences, enhancing comprehension and catering to individual needs."/>
      </div>
    </div>
  )
}

export default WhatGPT3;