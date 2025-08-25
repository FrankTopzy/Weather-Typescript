//import React from 'react'
import Styles from './Gemini.module.css';
import geminiLogo from '../../public/gemini-chatbot-logo.svg';
import { useEffect, useState, type FormEvent } from 'react';
import { type Message } from '../Data/geminiApi';

function Gemini() { 
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let nextId: number = 1;

  //handle form submission
  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    setMessages(prev => [...prev, {
      id: nextId++,
      sender: 'user',
      text: input.trim()
    }]);
    
    //console.log(input.trim());
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: nextId++,
        sender: 'bot',
        text: 'Just a sec...'
      }]);
    }, 1000)
  }

  //handle bot's response 



  return (
    <div className={`${Styles.container} max-w-[980px] pt-[70px] pb-[60px] px-0 mx-[auto]`}>
      {/* App Header */}
      <header className={`${Styles.app_header} mt-[4vh]`}>
        <h1 className={`${Styles.heading} text-[3rem] w-[fit-content] font-semibold`}>Hello, there</h1>
        <h2 className={`sub-heading font-semibold text-[2.6rem] mt-[-5px] text-[var(--subheading-color)]`}>How can I help you?</h2>
      </header>

      {/* Suggestions List */}
      <ul className={`${Styles.suggestions} flex gap-[15px] mt-[9.5vh] overflow-x-auto`}>
        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">draw</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded text-[#28a745]">lightbulb</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded text-[#ffc107]">explore</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded text-[#6f42c1]">code_blocks</span>
        </li>
      </ul>

      {/* Suggestions List */}
      <div className={`${Styles.chats_container} flex gap-[20px] flex-col`}>
        {messages.map( message => {
          return (
            message.sender === 'user' ? (
              <div className={`${Styles.message} ${Styles.user_message} flex-col items-end`} key={crypto.randomUUID()}>
                <p className='py-[12px] px-[16px] max-w-[75%] rounded-tl-[13px] rounded-tr-[13px] rounded-br-[3px] rounded-bl-[13px] bg-[var(--secondary-color)]'>
                  {message.text}
                </p>
              </div>
            ) : (
              <div className={`${Styles.message} ${Styles.bot_message} flex items-center my-[9px] mx-auto`} key={crypto.randomUUID()}>
                <img src={geminiLogo} alt="bot_logo" width='40' className={`rounded-full bg-[var(--secondary-color)] border-[1px]  border-[var(--secondary-hover-color)] shrink-0 p-[6px] self-start mr-[-7px] ${isLoading ? 'animate-pulse' : ''}`}/>
                <p className='max-w-[75%]'>{message.text}</p>
              </div>
            )
          )
        })}

        
      </div>

      {/* Prompt Container */}
      <div className={`prompt_container fixed bottom-0 left-0 w-full py-[16px] bg-[var(--primary-color)]`}>
        <div className={`${Styles.prompt_wrapper} flex`}>
          <form className={`${Styles.prompt_form}`} onSubmit={handleSubmission}>
            <div className={`h-[52px] flex-1 flex items-center bg-[var(--secondary-color)] rounded-3xl`}>
              <input type="text" value={input} className={`${Styles.prompt_input} h-full flex-1 pl-[20px] outline-0 text-[var(--text-color)] placeholder:text-[var(--placeholder-color)] text-[1rem]`} placeholder='Ask Gemini' required onChange={(e) => setInput(e.target.value)}/>

              <div className={`${Styles.prompt_actions} flex gap-2 mr-[5px]`}>
                <button className={`material-symbols-rounded w-[40px] h-[40px]`} type='button'>attach_file</button>
                <button className={`${Styles.send_btn} hover:bg-[#0264e3] material-symbols-rounded text-[#fff] bg-[#1d7efd]`}>arrow_upward_alt</button>
              </div>
            </div>
          </form>

          <button className="material-symbols-rounded">light_mode</button>
          <button className="material-symbols-rounded">delete</button>
        </div>

        <p className={`${Styles.disclaimer_text} text-center text-[0.9rem] pt-[16px] px-[20px]`}>Gemini can make mistakes, so double-check it.</p>
      </div>
    </div>
  )
}

export default Gemini
