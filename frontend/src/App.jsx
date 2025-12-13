import { useState } from 'react'
import './App.css'
import Titulo from './components/ComponentePrueba'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Esperando al concurso")

  return (
    <>
      <div>
        <h1>JaviPalabra - Concurso</h1>
        <Titulo texto={message}/>
        <button onClick={() => setMessage("¡El concurso no ha empezado!")}>
          Start
        </button>
      </div>
    </>
  )
}

export default App
