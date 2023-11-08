import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import dataService from './services/data'
import AppNavbar from './components/AppNavbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const info = [{
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
  },
  {user:'kissa',
  title:'Toinen nootti',
  text: 'No other object has been misidentified as a flying saucer more often than the planet Venus.',
  tags:'X-files, Venus, flying saucers'},
  {user:'kissa',
  title:'Kolmas nootti',
  text: "Even the former leader of United States of America, James Earl Carter Jr., thought he saw a UFO once... But it's been proven he only saw the planet Venus.",
  tags:'X-files, Venus, POTUS'},
  {user:'kissa',
  title:'Neljäs nootti',
  text: 'Scientists have yet to discover how neural networks create self-consciousness, let alone how the human brain processes two-dimensional retinal images into the three-dimensional phenomenon known as perception.',
  tags:'X-files, perception, consciousness'},
]

function App() {
  const [state, setState] = useState({
    isLogged:true,
    viewEditor:false,
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
