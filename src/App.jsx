import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import dataService from './services/data'
import AppNavbar from './components/AppNavbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  const [state, setState] = useState({
    isLogged:false,
    viewEditor:false,
    token:"",
    error:"",
    user:""
  })

  // const [entries, setEntries] = useState([])

  // const [dataRequest, setDataRequest] = useState([])

  // // --- Get initial entries ---
  // useEffect(() => {
  //   dataService.getAll()
  //     .then(intialData => {
  //       setEntries(intialData)
  //   })
  // },[dataRequest])

  // --- Add entry ---
  const addEntry = (dataObject) => {
    console.log(dataObject)
    dataService.create(dataObject)
      .then(returnedData => {
        setEntries(entries.concat(returnedData))
      })
  }

  // --- Log user in ---
  const logUserIn = (userObject) => {
    console.log('log in',userObject)
  }

  const registerUser = (userObject) => {
    console.log('register', userObject)
  }

  // --- Rendering ---

  if(state.isLogged) {
    return (
    <div className='App'>
      <AppNavbar />
        <Routes>
          {/* <Route path="/" element={<HomePage entries={entries} addEntry={addEntry}/>} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />}/> */}
      </Routes> 
    </div>
    )
  } else {
    return (
    <div className='App'>
      <AppNavbar />
        <Routes>
          <Route 
            path="/" 
            element={<LoginPage logUserIn={logUserIn}
                                registerUser={registerUser} />} />
        </Routes>
    </div>
    )
  }
}

export default App
