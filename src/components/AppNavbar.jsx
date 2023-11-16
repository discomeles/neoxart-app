import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const NavigationLinks = ({loginStatus, userFunction, user}) => {
if (loginStatus) {
  const navtitle=`Welcome, ${user}`
  return (
    <>
    <NavDropdown title={navtitle} id="basic-nav-dropdown" align="end">
      <NavDropdown.Item onClick={userFunction}>
      Logout
      </NavDropdown.Item>
      <NavDropdown.Item>
      Create a new entry
      </NavDropdown.Item>  
    </NavDropdown>
    </>
  )
} else {
  return (
    <></>
  )
}
}

// const AddEntryButton = ({loginStatus}) => {
//   if (loginStatus) {
//     return (
//       <>
//         <style type="text/css">
//         {`
//     .btn-danger {
//       background-color: #B71C1C;
//       color: black;
//       font-size: 1.5rem;
//       font-weight: 700;
//       padding: 0.0rem 0.5rem;
//       margin: 1rem;
//     }
//     `}
//       </style>
//       <Button variant="danger">+</Button>
//       </>
//     )
//   }
// }

const AppNavbar = ({loginStatus, userFunction, user}) => {
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
              alt=""
              src="/neoxart.svg"
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{' '}
            neoxart
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavigationLinks 
            loginStatus={loginStatus}
            userFunction={userFunction}
            user={user}
          />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <AddEntryButton loginStatus={loginStatus} /> */}
    </>
  );
}

export default AppNavbar;