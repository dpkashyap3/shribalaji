import React,{useState} from 'react'
import {Container,Image,Col,Row,Button} from "react-bootstrap"
import info from "../images/info.png"
import {motion} from "framer-motion"
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGoogle} from "react-icons/fa"
import ReadModal from "./ReadModal"

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

const links=[
    
        {name:<FaFacebook/>},
        {name:<FaInstagram/>},
        {name:<FaGoogle/>},
        {name:<FaTwitter/>},
        {name:<FaLinkedin/>},
    
]

function Common() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Row>
                <Col lg={2} md={4}><Image className="ml-5 mt-5 img-fluid" height="200" width="200" src={info}/></Col>
                <Col lg={10} md={8}><h1 className="heading">Shri Balaji Associates</h1>
                <p className="text-white mt-3 h5">We are prominent Accountanting Firm in Delhi. We offer services in New Delhi and other major cities in India, like accounts outsourcing, auditing, company formation in India, Business taxation, corporate compliance, starting business in India, registration of foreign companies, transfer pricing, tax due diligence, taxation of expatriates etc.</p>
                </Col>
                </Row>
                <Row className="mt-5">
                <ReadModal show={modalShow} onHide={()=>setModalShow(false)}/>
                <Col className="w-50 mx-auto" lg={6} md={6} sm={6}><Button className="btnreadme" variant="danger" size="lg" onClick={()=>setModalShow(true)}>Read More</Button></Col>
                </Row>
                <Row className="iconBar">
                <Col lg={2} md={2} sm={2} xs={2}></Col>
                {
                    links.map(item=><Col lg={2} md={2} sm={2} xs={2} className="icons">{item.name}</Col>)
                }
                </Row>
                <Row className="mt-5">
                <Col className="w-75 mx-auto mt-5" lg={4} md={4} sm={4}><small>Copyright 2020, All Right Reserve</small></Col>
                </Row>
              </motion.div>
            </Container>
    )
}

export default Common
