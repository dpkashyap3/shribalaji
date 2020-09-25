import React from 'react'
import {Container} from "react-bootstrap"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import {HashRouter as Router} from "react-router-dom"


function App() {
  return (
  <Router>
  <Container fluid style={{paddingLeft:0,paddingRight:0}}>
    <Navbar/>
    <Banner/>
    <Footer/>
  </Container>
   
  </Router>
  )
}

export default App;
