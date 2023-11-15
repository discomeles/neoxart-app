import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import AppNavbar from '../components/AppNavbar'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Nav from 'react-bootstrap/Nav'

const LoginForm = ({logUserIn}) => {

  const [loginUserstate, setLoginUserState] = useState({
    username:'',
    password:''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    logUserIn(loginUserstate)
    setLoginUserState({
      username:'',
      password:''
    })
  }

    return (
      <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="loginUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Username"
            value={loginUserstate.username}
            onChange={(e) => {setLoginUserState(state => (
                      { ...state, username:e.target.value}))}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password" 
           placeholder="Password"
           value={loginUserstate.password}
           onChange={(e) => {setLoginUserState(state => (
                    { ...state, password:e.target.value}))}}
          />
        </Form.Group>
          <Button variant="dark" type="submit">Login</Button>
      </Form>
      </>
    )
  }

const RegisterForm = ({registerUser}) => {

  const [registerUserstate, setRegisterUserState] = useState({
    username:'',
    email:'',
    password:''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    registerUser(registerUserstate)
    setRegisterUserState({
      username:'',
      email:'',
      password:''
    })
  }

  return (
    <>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="registerUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Username"
          value={registerUserstate.username}
          onChange={(e) => {setRegisterUserState(state => (
                    { ...state, username:e.target.value}))}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email"
          placeholder="Email"
          value={registerUserstate.email}
          onChange={(e) => {setRegisterUserState(state => (
                    { ...state, email:e.target.value}))}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password"
          placeholder="Password"
          value={registerUserstate.password}
          onChange={(e) => {setRegisterUserState(state => (
                    { ...state, password:e.target.value}))}}
        />
      </Form.Group>
        <Button variant="dark" type="submit">Register</Button>
    </Form>
    </>
  )
}

const LoginPage = ({logUserIn, registerUser}) => {
  const [key, setKey] = useState("login")


  return (
    <>
    <style type="text/css">
    {`
    .nav {
      --bs-nav-link-color: #B71C1C;
    }
    `}
    </style>
    <Container style={{ width: '30rem'}}>
      {/* <Row className='py-5'> */}
      <Row className='py-5'>
        <Card className='px-0'>
          <Card.Header>
            <Nav 
              variant="tabs" 
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register">Register</Nav.Link>
              </Nav.Item>
            </Nav>

          </Card.Header>
          <Card.Body>
            {key==="login" && <LoginForm logUserIn={logUserIn}/>}
            {key==="register" && <RegisterForm registerUser={registerUser}/>}            
         </Card.Body>
        </Card>
      </Row>
    </Container>
    </>
  )
}
  
export default LoginPage;