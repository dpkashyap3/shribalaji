import React from 'react'
import {Container,Navbar,Row,Col,Image} from "react-bootstrap"
import Logo from "../images/logo.png"


function Footer() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mt-5">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6}>
                        <Image src={Logo} height="150px" width="200px"/>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <h4 className="text-white">Subscribe Our News Letter</h4>
                        <form className="form">
                            <input className="form" type="text" id="newsletter" placeholder="Enter Your Email Address"/>
                            <button className="ml-2 btn btn-sm btnreadme">Submit</button>
                        </form>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <h4 className="text-white">Contact Details</h4>
                        <p className="text-white">3406, 2nd Floor, Gali Bajrangbali, Sita Ram Bazar Near Chawri Bazar Metro Station, Delhi-110006</p>
                        <p className="text-white">8860686267, 8287060438, 8130179225</p>
                    </Col>
                </Row>
            </Container>
        </Navbar>        
    )
}

export default Footer
