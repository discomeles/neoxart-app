import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import AppNavbar from '../components/AppNavbar'

const LoginForm = () => {
    return (
      <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email" placeholder="Password" />
        </Form.Group>
          <Button variant="dark" type="submit">Login</Button>{' '}
          <Button variant="dark" type="submit">Register</Button>
      </>
    )
  }

const LoginPage = () => {
  return (
    <Container >
      <Row className='py-5'>
        <Card style={{ width: '30rem', margin: 'auto'}}>
          <Card.Header>Login or register a new account</Card.Header>
          <Card.Body>
            <LoginForm />
         </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
  
export default LoginPage;