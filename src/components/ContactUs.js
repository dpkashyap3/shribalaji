import React from 'react'
import {Container,Row,Col,Image} from "react-bootstrap"
import info from "../images/info.png"
import {BiMobileVibration} from "react-icons/bi"
import {GoLocation} from "react-icons/go"
import {HiOutlineMailOpen} from "react-icons/hi"
import {motion} from "framer-motion"
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGoogle} from "react-icons/fa"

const pageload={
    initial:{
        y:"200vh",
        x:"100vw"
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.5
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





function ContactUs() {
    return (
        <Container>
           
            <Row><motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
            <Col lg={2} md={4}><Image className="heading img-fluid" height="200" width="200" src={info}/></Col>
            <Col lg={10} md={8}><h1 className="heading display-3 text-white">Shri Balaji Associates</h1><br/>
            <p className="text-white mt-3 h4"><GoLocation className="h2 mr-3 contacticons"/>3406, 2nd Floor, Gali Bajrangbali, Sita Ram Bazar Near Chawri Bazar Metro Station, Delhi-110006</p><hr/>
            <p className="mt-3 h4 text-white"><BiMobileVibration className="h2 mr-3 contacticons"/>8860686267, 8287060438, 8130179225 </p><hr/>
            <p className="mt-3 h4 text-white"><HiOutlineMailOpen className="h2 mr-3 contacticons"/>nvniteshnv@gmail.com</p><hr/>
            </Col>
            </motion.div></Row>
            <Row className="iconBar">
            <Col lg={2} md={2} sm={2} xs={2}></Col>
            {
                links.map(item=><Col lg={2} md={2} sm={2} xs={2} key={item.name} className="icons">{item.name}</Col>)
            }
            </Row>
                   
        </Container>
    )
}

export default ContactUs
