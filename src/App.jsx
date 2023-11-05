import { useState } from 'react'
import NoteCard from './components/NoteCard'
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

const info = `Mä tunnen sen jo kasvavan
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

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path="/" element={<HomePage info={info} />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>  
  
  )
}

export default App
