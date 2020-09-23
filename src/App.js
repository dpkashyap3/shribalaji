import React from 'react'
import {Container} from "react-bootstrap"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
function App() {
  return (
  <Container fluid style={{paddingLeft:0,paddingRight:0}}>
    <Navbar/>
    <Banner/>
  </Container>
  )
}

export default App;
