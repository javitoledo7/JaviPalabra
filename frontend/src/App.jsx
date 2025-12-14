import { useState } from 'react'
import './App.css'
import Login from '../views/Login'
import ModeratorView from '../views/ModeratorView'
import PlayerView from '../views/PlayerView'

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
        {rol === "Moderator" && <ModeratorView onLogin={handleLogin} />}
        {rol === "Player" && <PlayerView />}
      </div>
    </>
  )
}

export default App
