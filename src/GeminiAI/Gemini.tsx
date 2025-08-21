//import React from 'react'
import Styles from './Gemini.module.css';

function Gemini() {
  return (
    <div className={`${Styles.container} max-w-[980px] pt-[70px] pb-[60px] px-0 mx-[auto]`}>
      {/* App Header */}
      <header className={`${Styles.app_header}`}>
        <h1 className={`heading text-3xl font-semibold`}>Hello, there</h1>
        <h2 className={`sub-heading text-3xl font-semibold`}>How can I help you</h2>
      </header>

      {/* Suggestions List */}
      <ul className={`${Styles.suggestions} flex gap-3.5 mt-[87px]`}>
        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">draw</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">lightbulb</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">explore</span>
        </li>

        <li className={`suggestions_item`}>
          <p className={`text`}>Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">code_blocks</span>
        </li>
      </ul>

      {/* Prompt Container */}
      <div className={`prompt_container`}>
        <div className={`${Styles.prompt_wrapper}`}>
          <form className={`prompt_form flex`}>
            <div className={`flex-1 flex`}>
              <input type="text" className={`prompt_input flex-1`}/>

              <div className={`prompt_actions`}>
                <button className={`material-symbols-rounded w-[40px] h-[40px]`}>attach_file</button>
                <button className="material-symbols-rounded">arrow_upward_alt</button>
              </div>
            </div>

            <button className="material-symbols-rounded">light_mode</button>
            <button className="material-symbols-rounded">delete</button>
          </form>
        </div>

        <p className={`${Styles.disclaimer_text}`}>Gemini can make mistakes, so double-check it.</p>
      </div>
    </div>
  )
}

export default Gemini
