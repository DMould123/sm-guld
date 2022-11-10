import image from './image.jpg'
import './App.css'
import LogRocket from 'logrocket'
LogRocket.init('eifezl/sm-guld')

LogRocket.identify('eifezl/sm-guld', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
})

function App() {
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
    </div>
  )
}

export default App
