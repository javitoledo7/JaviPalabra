import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import ModeratorView from './components/ModeratorView'
import PlayerView from './components/PlayerView'

function App() {
  const[rol, setRol] = useState(null)

  function handleLogin(chosenRol){
    setRol(chosenRol)
  }

  return (
    <>
      <div>
        <h1>JaviPalabra - Quiz</h1>

        {!rol && <Login onLogin={handleLogin} />}

        {rol === "Moderator" && <ModeratorView />}
        {rol === "Player" && <PlayerView />}
      </div>
    </>
  )
}

export default App
