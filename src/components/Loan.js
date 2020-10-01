import React,{useState} from 'react'
import {Container,Col,Row,Card,Button} from "react-bootstrap"
import {motion} from "framer-motion"
import {GoPerson,GoHome} from "react-icons/go"
import {AiOutlineGold,AiOutlineBook,} from "react-icons/ai"
import {FaIndustry,FaHome} from "react-icons/fa"
import ContactModal from "./ContactModal"

const pageload={
    initial:{
        y:"",
        x:"200vw"
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.3
        }
    }
}


const LoanData=[
    {   title:"Personal Loan",
        icon:<GoPerson className="display-1 mx-auto"/>
    },
    {   title:"Home Loan",
        icon:<GoHome className="display-1 mx-auto"/>
    },
    {   title:"Loan Against Property",
        icon:<FaHome className="display-1 mx-auto"/>
    },
    {
        title:"Gold Loan",
        icon:<AiOutlineGold className="display-1 mx-auto"/>
    },
    {   title:"Education Loan",
        icon:<AiOutlineBook className="display-1 mx-auto"/>
    },
    {   title:"Corporate Loan",
        icon:<FaIndustry className="display-1 mx-auto"/>
    }
    
]




function Loan() {


    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                <h1 className="display-1 text-white">Loan</h1>
                    <Row>
                    {
                        LoanData.map(item=>(
                        <Col key={item.name} lg={4} md={6} sm={12} xs={12} className="mt-5">
                        <Card className="bg-light cardOver" style={{ width: '18rem',height:"200px"}}>
                        {item.icon}
                        <Card.Body>
                          <Card.Title className="text-center">{item.title}</Card.Title>
                          <ContactModal show={modalShow} onHide={()=>setModalShow(false)} data={item}/>
                            <Button className="btnreadme ml-5 pl-3" size="lg" onClick={()=>setModalShow(true)}>Contact Us</Button>
                          
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

export default Loan
