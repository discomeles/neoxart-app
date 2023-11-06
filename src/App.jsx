import { useState } from 'react'
import NoteCard from './components/NoteCard'
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const info1 = `Mä tunnen sen jo kasvavan
koodin editorissain
Uuden backendin toteutan
ja teen sen pystypäin
Takaa dokumentaation etsin aina vaan
Ja metodin jokaisen mä opin tuntemaan
NODEMON!
Omakseni saan
"Kun koodaan vaan"
Me yhdessä voitetaan
NODEMON!
Oot mun ystäväin olet terminaalissain
NODEMON!`

// const info = {
//   "user":"kissa",
//   "title":"otsikko",
//   "text": `Mä tunnen sen jo kasvavan
//   koodin editorissain
//   Uuden backendin toteutan
//   ja teen sen pystypäin
//   Takaa dokumentaation etsin aina vaan
//   Ja metodin jokaisen mä opin tuntemaan
//   NODEMON!
//   Omakseni saan
//   "Kun koodaan vaan"
//   Me yhdessä voitetaan
//   NODEMON!
//   Oot mun ystäväin olet terminaalissain
//   NODEMON!`,
//   "tags":["nodemon","koodi","backend"]
//   }

function App() {
  const [state, setState] = useState({
    isLogged:true,
    token:"",
    error:"",
    user:""
  })

// --- Rendering ---

  if(state.isLogged) {
    return (
    <div className='App'>
      <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage info={info} />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes> 
    </div>
    )
  } else {
    return (
    <div className='App'>
      <AppNavbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </div>
    )
  }
}

export default App
