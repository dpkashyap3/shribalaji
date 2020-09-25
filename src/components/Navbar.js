import React from 'react'
import {Navbar, Nav, Container,Image} from "react-bootstrap"
import Logo from "../images/logo.png"
import {Link} from "react-router-dom"

function Navigation() {
    return (

<Navbar bg="dark" variant="dark" expand="sm" className="navtop">
<Container >
  <Navbar.Brand href="/"><Image className="logostyle" src={Logo} rounded /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-center bg-dark mt-5 rounded">
      <Nav.Link><Link className='link' to="/">Home</Link></Nav.Link>
      <Nav.Link><Link className='link' to="/services">Services</Link></Nav.Link>
      <Nav.Link><Link className='link' to="/qutations">Quatations</Link></Nav.Link>
      <Nav.Link><Link className='link' to="/aboutus">About Us</Link></Nav.Link>
      <Nav.Link><Link className='link' to="/gallery">Our Setup</Link></Nav.Link>
      <Nav.Link><Link className='link' to="/contactus">Contact Us</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Navigation
