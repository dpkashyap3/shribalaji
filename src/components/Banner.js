import React from 'react'
import {Container,Image,Col,Row,Button} from "react-bootstrap"
import info from "../images/info.png"

function Banner() {
    return (
        <Container fluid className="banner">
            <Container>
                <br/>
                <Row className="mt-5 pt-5"> 
                <Col lg={2} md={4}><Image className="ml-5 img-fluid" height="200" width="200" src={info}/></Col>
                <Col lg={10} md={8}><h1 className="heading display-2">Shri Balaji Associates</h1>
                <p className="text-white mt-3 h5">We are prominent Accountanting Firm in Delhi. We offer services in New Delhi and other major cities in India, like accounts outsourcing, auditing, company formation in India, Business taxation, corporate compliance, starting business in India, registration of foreign companies, transfer pricing, tax due diligence, taxation of expatriates etc.</p>
                </Col>
                </Row>
                <Row className="mt-5"> 
                <Col lg={5} md={5}></Col>
                <Col lg={2} md={2}><Button className="btnreadme" variant="warning" size="lg">Read More</Button></Col>
                </Row>
              
            </Container>
        </Container>
    )
}

export default Banner
