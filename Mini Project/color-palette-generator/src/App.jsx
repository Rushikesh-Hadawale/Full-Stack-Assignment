import { useState } from 'react'
import './App.css'

function App() {
  // Stores the current color
  const [color, setColor] = useState('#F37A01')

  // Generates a random hex color
  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, '0')

    setColor(randomColor.toUpperCase())
  }

  // Copies the displayed hex code to the clipboard
  const copyColor = async () => {
    await navigator.clipboard.writeText(color)
  }

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: color }}>
        <h1>Color Palette Generator</h1>

        {/* Clicking the hex code copies it */}
        <p className="hex-code" onClick={copyColor}>
          {color}
        </p>

        <button onClick={generateColor}>
          Generate Color
        </button>
      </div>
    </div>
  )
}

export default App