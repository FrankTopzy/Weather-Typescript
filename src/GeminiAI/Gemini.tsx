//import React from 'react'

function Gemini() {
  return (
    <div className="container max-w-[1000px] py-[70px] mx-auto">
      {/* App Header */}
      <header className="app-header">
        <h1 className="heading text-3xl font-semibold">Hello, there</h1>
        <h2 className="sub-heading text-3xl font-semibold">How can I help you</h2>
      </header>

      {/* Suggestions List */}
      <ul className="suggestions flex gap-3.5 mt-[87px]">
        <li className="suggestions_item">
          <p className="text">Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">draw</span>
        </li>

        <li className="suggestions_item">
          <p className="text">Design a home office setup for remote work under $500</p>

          <span className="material-symbols-rounded">lightbulb</span>
        </li>

        <li className="suggestions_item">
          <p className="text">Design a home office setup for remote work under $500</p>

          <button type="button"><img src="" alt="" /></button>
        </li>

        <li className="suggestions_item">
          <p className="text">Design a home office setup for remote work under $500</p>

          <button type="button"><img src="" alt="" /></button>
        </li>
      </ul>

      {/* Prompt Container */}
      <div className="prompt-container">
        <div className="prompt-wrapper">
          <form className="prompt_form flex">
            <div className="flex-1 flex">
              <input type="text" className="prompt_input flex-1"/>

              <div className="prompt_actions">
                <button className="w-[40px] h-[40px]"><span className="material-symbols-rounded">attach_file</span></button>
                <button><span className="material-symbols-rounded">arrow_upward_alt</span></button>
              </div>
            </div>

            <button className="material-symbols-rounded">light_mode</button>
            <button className="material-symbols-rounded">delete</button>
          </form>
        </div>

        <p className="disclaimer-text">Gemini can make mistakes, so double-check it.</p>
      </div>
    </div>
  )
}

export default Gemini
