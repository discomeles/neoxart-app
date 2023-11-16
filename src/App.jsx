import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import dataService from './services/data'
import userService from './services/login'
import AppNavbar from './components/AppNavbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AddEntryButton from './components/AddEntryButton'
import AlertModal from './components/AlertModal'

function App() {
  const [state, setState] = useState({
    isLogged:false,
    viewEditor:false,
    token:"",
    error:"",
    user:"",
  })

  // --- Check if user is already logged in
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('neoxartUser')
    const loginToken = window.localStorage.getItem('neoxartToken')
    if(loggedUser) {
      setState(state => (
        { ...state,
          isLogged:true,
          token:loginToken, 
          user:loggedUser}))
    }
  },[])

  const [entries, setEntries] = useState([])

  const [dataRequest, setDataRequest] = useState("")

  // --- Get initial entries ---
  useEffect(() => {
    if(state.isLogged) {
      getAllEntries()
    }
  },[dataRequest])

  // --- Get all entries
  const getAllEntries = () => {
    console.log('get all')
    dataService.getAll(state.token)
      .then(responseData => {
        setEntries(responseData)
      })
  }

  // --- Add entry ---
  const addEntry = (dataObject) => {
    console.log(dataObject)
    dataService.create(dataObject, state.token)
      .then(returnedData => {
        setEntries(entries.concat(returnedData))
      })
  }

  // --- Log user in ---
  const logUserIn = (userObject) => {
    console.log('log in',userObject)
    userService.login(userObject)
      .then (response => {
        if (response.status === 200) {
          setState(state => (
            { ...state,
              isLogged:true,
              token:response.data.token, 
              user:response.data.username}))
          window.localStorage.setItem(
            'neoxartUser', response.data.username
          )
          window.localStorage.setItem(
            'neoxartToken', response.data.token
          )
          getAllEntries()
        }
      })
    
  }

  const registerUser = (userObject) => {
    console.log('register', userObject)
    userService.register(userObject)
    .then (response => {
      if (response.status === 201) {
        const name = response.data.username
        setAlertModalText("Succesfully registered user: " +userObject.username+"\nYou may now log in.")
        setShowAlertModal(true)
        setTimeout(() => {
          setAlertModalText("")
          setShowAlertModal(false)
        },5000)
      }
    })
  }

  const logUserOut = () => {
    console.log('log out')
    setState(state => ({ ...state, isLogged:false}))
    window.localStorage.clear()
  }

  // --- Entry editing modal ---
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = (event) => {
    setShowModal(true)
  }

  const handleCloseModal = (event) => {
    setShowModal(false)
  }

  // --- Alert modal ---
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [alertModalText, setAlertModalText] = useState("")
 
  const handleShowAlertModal = () => {
    setShowModal(true)
  }

  const handleCloseAlertModal = () => {
    setShowModal(false)
  }


  // --- Rendering ---

  if(state.isLogged) {
    return (
    <div className='App'>
      <AppNavbar 
        loginStatus={state.isLogged} 
        userFunction={logUserOut}
        user={state.user}
      />
      <AddEntryButton 
        loginStatus={state.isLogged}
        handleShowModal={handleShowModal}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              entries={entries} 
              addEntry={addEntry}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
            />
            }
          />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />}/> */}
      </Routes> 
    </div>
    )
  } else {
    return (
    <div className='App'>
      <AppNavbar 
        loginStatus={state.isLogged}
        userFunction={null}
        user={null}
      />
      <AlertModal showAlertModal={showAlertModal} alertModalText={alertModalText}/>
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
