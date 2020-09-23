import React from 'react'
import {Navbar, Nav, Container,Image} from "react-bootstrap"
import Logo from "../images/logo.png"
import {Link} from "react-router-dom"

function Navigation() {
    return (

<Navbar bg="dark" variant="dark" expand="sm" className="navtop">
<Container >
  <Navbar.Brand href="#home"><Image className="logostyle" src={Logo} rounded /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-center bg-dark mt-5 rounded">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/Services">Services</Link></Nav.Link>
      <Nav.Link><Link to="/AboutUs">About Us</Link></Nav.Link>
      <Nav.Link href="#link">Case Study</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Navigation
