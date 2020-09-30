import React from 'react'
import {Container} from "react-bootstrap"
import Common from "./Common"
import About from "./About"
import Services from "./Services"
import Contact from "./ContactUs"
import Gallery from "./Gallery"
import Qutation from "./Quatations"
import NGO from "./NGO"
import Loan from "./Loan"
import {Route,Switch} from "react-router-dom"

function Banner() {
    return (
        <Container fluid className="banner">
        <Switch>
           <Route exact path="/" component={Common}/>
           <Route exact path="/aboutus" component={About}/>
           <Route exact path="/services" component={Services}/>
           <Route exact path="/contactus" component={Contact}/>
           <Route exact path="/loan" component={Loan}/>
           <Route exact path="/ngo" component={NGO}/>
           <Route exact path="/gallery" component={Gallery}/>
           <Route exact path="/qutations" component={Qutation}/>
        </Switch>
        </Container>
    )
}

export default Banner
