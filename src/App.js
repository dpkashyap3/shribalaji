import React from 'react'
import {Container} from "react-bootstrap"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
  <Router>
  <Container fluid style={{paddingLeft:0,paddingRight:0}}>
    <Navbar/>
    <Banner/>
  </Container>
  </Router>
  )
}

export default App;
