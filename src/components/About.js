import React from 'react'
import {Container,Col,Row,Card} from "react-bootstrap"
import {motion} from "framer-motion"

const pageload={
    initial:{
        y:"200vw",
        x:""
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.3
        }
    }
}


const cardsData=[
    {   title:"Our Vision",
        body:" Our firm continuously strives to be the Premier Accounting and Consultancy firm that provides excellent service to our clients and an excellent quality of life for our associates."
    },
    {   title:"Our Mission",
        body:"We will predominantly work with organisations in the charitable and voluntary sectors as partners to help them achieve their desired outcomes."
    },
    {   title:"Our Objective",
        body:"We are committed to creating and sustaining long-term relationships which drawn on our experience and expertise to help our clients achieve real success"
    },
    {   title:"Excellence in Service",
        body:"To not just meet but exceed client expectation consistently by imbibing Teamwork, Professionalism, Personalised Service & Specialisation."
        
    },
]

function About() {

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                    <Row>{
                        cardsData.map(item=>(
                        <Col lg={4} md={6} sm={12} xs={12} className="mt-5 pt-5">
                        <Card className="bg-dark text-white cardOver" style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title className="text-center">{item.title}</Card.Title>
                          <Card.Text>
                          {item.body}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                        </Col>
                        ))
                    }
                    </Row>
                </Container>
              </motion.div>
            </Container>
    )
}

export default About
