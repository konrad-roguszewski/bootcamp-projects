import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function NavbarComponent() {

  const { currentUser } = useAuth()

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Todo App
      </Navbar.Brand>
        <span>Welcome: {currentUser.email}</span>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
