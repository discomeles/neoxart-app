import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import AppNavbar from './AppNavbar'

const LoginForm = () => {
    return (
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          {/* <Card.Text>
            foo
          </Card.Text> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Password" />
        </Form.Group>
          <Button variant="primary" type="submit">Submit!</Button>
        </Card.Body>
      </Card>
    )
  }

const LoginPage = () => {
  return (
    <LoginForm />
  )
}
  
export default LoginPage;