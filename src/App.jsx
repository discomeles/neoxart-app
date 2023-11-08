import { useState } from 'react'
import NoteCard from './components/NoteCard'
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const info = {
  user:'kissa',
  title:'Oodi Nodemonille',
  text: 'Mä tunnen sen jo kasvavan\n'+
  'koodin editorissain\n'+
  'Uuden backendin toteutan\n'+
  'ja teen sen pystypäin\n'+
  'Takaa dokumentaation etsin aina vaan\n'+
  'Ja metodin jokaisen mä opin tuntemaan\n'+
  'NODEMON!\n'+
  'Omakseni saan\n'+
  '"Kun koodaan vaan"\n'+
  'Me yhdessä voitetaan\n'+
  'NODEMON!\n'+
  'Oot mun ystäväin olet terminaalissain\n'+
  'NODEMON!',
  tags:'nodemon, koodi, backend'
  }

function App() {
  const [state, setState] = useState({
    isLogged:true,
    edit:false,
    token:"",
    error:"",
    user:""
  })

// function to handle adding note data
const addEntry = (dataObject) => {
  console.log(dataObject)
}

// --- Rendering ---

  if(state.isLogged) {
    return (
    <div className='App'>
      <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage info={info} addEntry={addEntry}/>} />
          <Route path="/login" element={<LoginPage />}/>
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
