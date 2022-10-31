import image from './image.jpg'
import './App.css'

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
