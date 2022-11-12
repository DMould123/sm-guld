import React, { useState } from 'react'
import image from './image.jpg'
import './App.css'
import LogRocket from 'logrocket'
import { useSpeechSynthesis } from 'react-speech-kit'
LogRocket.init('eifezl/sm-guld')

LogRocket.identify('eifezl/sm-guld', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
})

function App() {
  const [text, setText] = useState('')
  const { speak } = useSpeechSynthesis()

  const handleOnClick = () => {
    speak({ text: text })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-image" alt="" />
        <p>BK Häcken 2022</p>
        <a
          className="App-image"
          href="https://bkhacken.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Winners - SM Guld
        </a>
      </header>
      <textarea
        className="textAreaStyle"
        onChange={(e) => {
          setText(e.target.value)
        }}
      ></textarea>
      <button
        className="buttonStyle"
        onClick={() => {
          handleOnClick()
        }}
      >
        Listen
      </button>
    </div>
  )
}

export default App
