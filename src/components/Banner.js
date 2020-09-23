import React from 'react'
import {Container,Image,Col,Row,Button} from "react-bootstrap"
import info from "../images/info.png"
import {motion} from "framer-motion"


const pageload={
    initial:{
        y:"-100vh",
        x:"-50vw"
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.3
        }
    }
}




function Banner() {
    return (
        <Container fluid className="banner">
            <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="mt-5 pt-5">  
                <Row>
                <Col lg={2} md={4}><Image className="ml-5 img-fluid" height="200" width="200" src={info}/></Col>
                <Col lg={10} md={8}><h1 className="heading display-2">Shri Balaji Associates</h1>
                <p className="text-white mt-3 h5">We are prominent Accountanting Firm in Delhi. We offer services in New Delhi and other major cities in India, like accounts outsourcing, auditing, company formation in India, Business taxation, corporate compliance, starting business in India, registration of foreign companies, transfer pricing, tax due diligence, taxation of expatriates etc.</p>
                </Col>
                </Row>
                
                <Row className="mt-5"> 
                <Col lg={5} md={5}></Col>
                <Col lg={2} md={2}><Button className="btnreadme" variant="danger" size="lg">Read More</Button></Col>
                </Row>
              </motion.div>
            </Container>
        </Container>
    )
}

export default Banner
