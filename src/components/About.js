import React from 'react'
import {Container,Col,Row,Card,Image} from "react-bootstrap"
import {motion} from "framer-motion"
import vision from "../images/vison.png"
import mission from "../images/mission.png"
import objective from "../images/objective.png"
import nitesh from "../images/nitesh.png"
import nigam from "../images/nigam.png"


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
        body:" Our firm continuously strives to be the Premier Accounting and Consultancy firm that provides excellent service to our clients and an excellent quality of life for our associates.",
        image:vision
    },
    {   title:"Our Mission",
        body:"We will predominantly work with organisations in the charitable and voluntary sectors as partners to help them achieve their desired outcomes.",
        image:mission
    },
    {   title:"Our Objective",
        body:"We are committed to creating and sustaining long-term relationships which drawn on our experience and expertise to help our clients achieve real success",
        image:objective
    }
]


const owners=[
    {
        name:"Nitesh Verma",
        image:nitesh,
        desc:"Nitesh Verma is qualified accountant with ten years qualified experience gained within the various industries. He has been handled too many firms since last 10 years and all are the happy clients. He is very prominent and serious about his work and handling his team very politely and smartly."
    },
    {
        name:"Brij Mohan Nigam",
        image:nigam,
        desc:"Brij Mohan Nigam is an well experienced and smart accountant with 28 years of experience. Since the manual book-keeping and now the technical era he doing his work as the time want. He changed his way of working in passege of time just because the setisfaction of his clients."
    }
]


function About() {

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                    <Row>{
                        cardsData.map(item=>(
                        <Col key={item.name} lg={4} md={6} sm={12} xs={12} className="mt-5">
                        <Card className="bg-light cardOver" style={{ width: '18rem',height:"320px"}}>
                        <Image className="mx-auto" src={item.image} height="100px" width="100px"/>
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
                    <br/><br/><hr/>
                    <Row>{
                        owners.map(item=>(
                        <Col key={item.name} lg={4} md={6} sm={12} xs={12} className="mt-5">
                        <Card className="bg-light cardOver" style={{ width: '18rem',height:"100%"}}>
                        <Image className="mx-auto mt-3" src={item.image} height="150px" width="150px"/>
                        <Card.Body>
                          <Card.Title className="text-center">{item.name}</Card.Title>
                          <Card.Text>
                          {item.desc}
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
