import React,{useState} from 'react'
import {Container,Col,Row,Card,Button} from "react-bootstrap"
import {motion} from "framer-motion"
import {AiOutlinePropertySafety, AiOutlineStock, AiOutlineSetting} from "react-icons/ai"
import {FaCar,FaObjectGroup, FaCarCrash} from "react-icons/fa"
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




const InsuranceData=[
    {
        name:"Stock Insurance",
        icon:<AiOutlineStock className="display-1 mx-auto"/>,
        desc:"Stock insurance covers the costs of replacing your stock if any of it is lost, stolen or damaged. This type of cover can be added as an extension to your business contents policy. The cost of your policy will depend on the value and amount of stock insured, while any insurance payout will be based on the stock price of the item, not the retail price."
    },
    {
        name:"Property Insurance",
        icon:<AiOutlinePropertySafety className="display-1 mx-auto"/>,
        desc:"Property insurance provides protection against most risks to property, such as fire, theft and some weather damage. This includes specialized forms of insurance such as fire insurance, flood insurance, earthquake insurance, home insurance, or boiler insurance. Property is insured in two main ways—open perils and named perils"
    },
    {
        name:"Vehicle Insurance",
        icon:<FaCar className="display-1 mx-auto"/>,
        desc:"Vehicle insurance (also known as car insurance, motor insurance, or auto insurance) is insurance for cars, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle. "
    },
    {
        name:"Plant And Machinary Insurance",
        icon:<AiOutlineSetting className="display-1 mx-auto"/>,
        desc:"All Plant and machinery like excavators, rollers, dumpers, earth moving equipments, cranes, drilling machines etc used for erection/construction purpose can be covered under this policy. Both stationary & movable equipments can be covered. This is an Annual policy (12 months) which is to be renewed periodically but can also be issued for shorter periods."
    },
    {
        name:"Group Health Insurance",
        icon:<FaObjectGroup className="display-1 mx-auto"/>,
        desc:"A group mediclaim policy is a type of health plan where all the employees of a firm and covered under a common health insurance cover. It is a very common type of health insurance that is offered by practically every organisation in India"
    },
    {
        name:"Accidental Insurance",
        icon:<FaCarCrash className="display-1 mx-auto"/>,
        desc:"Accident insurance helps you pay for the medical and out-of-pocket costs that you may incur after an accidental injury. This includes emergency treatment, hospital stays, and medical exams, and other expenses you may face, such as transportation and lodging needs."
    }
]


function Loan() {


    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                    <h1 className="display-1 text-white">Insurance</h1>
                    <Row>{
                        InsuranceData.map(item=>(
                        <Col key={item.name} lg={4} md={6} sm={12} xs={12} className="mt-5">
                        <Card className="bg-light cardOver" style={{ width: '18rem',height:"100%"}}>
                        {item.icon}
                        <Card.Body>
                          <Card.Title className="text-center">{item.name}</Card.Title>
                          <Card.Text>
                          {item.desc}
                          </Card.Text>
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
