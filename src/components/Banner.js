import React from 'react'
import {Container} from "react-bootstrap"
import Common from "./Common"
import About from "./About"
import Services from "./Services"
import {Route,Switch} from "react-router-dom"

function Banner() {
    return (
        <Container fluid className="banner">
        <Switch>
           <Route exact path="/" component={Common}/>
           <Route exact path="/AboutUs" component={About}/>
           <Route exact path="/Services" component={Services}/>
        </Switch>
        </Container>
    )
}

export default Banner
