import React from 'react'
import {Container,Col,Row,Card} from "react-bootstrap"
import {motion} from "framer-motion"

const pageload={
    initial:{
        y:"",
        x:"200vh"
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.5
        }
    }
}


const cardsData=[
    {   title:"Company Formation in India",
        body:"We give advice on Company Registration in India and provide the complete solution for Company Formation in India, Private limited Company Formation and Company Incorporation in India."
    },
    {   title:"Foreign Investment Approvals",
        body:"Foreign investment in India is primarily governed by the FDI policy formulated by the secretariat for industrial assistance (SIA), the Department of Industrial policy and promotion (DIPP)."
    },
    {   title:"Auditing",
        body:"Internal Audit is an independent appraisal function established within an organization to examine and evaluate its activities as a service to the organization."
    },
    {   title:"Starting Business in India",
        body:"Business can be setup in India in three types like Formation of liaison office, Formation of Project office and Formation of Branch office."
    },
    {   title:"Corporate Compliance",
        body:"Indian companies are governed by Companies Act 1956 and company has to comply with various statutory provisions as per different sections of Companies Act 1956."
    },
    {   title:"Business Taxation",
        body:"Direct tax consultancy together with innovative tax efficient strategies, provided by us form an integral part of viable business decisions. These help our clients attain the desired goals."
    },
    {   title:"Taxation of Expatriates",
        body:"The employment of expatriates and foreign nationals involves several complex issues. Whilst the Indian economy and market place has generally been less attractive to expatriates and foreign workers."
    },
    {   title:"Accounts Outsourcing",
        body:"A refinance allows you to take out new personal loans that pay off your current mortgage. Although you are then obligated to make payments on the new top up card loan, your costs typically are lower after refinancing."
    },
    {
        title:"Transfer Pricing",
        body:"Since 1991, with the liberalization of trade and foreign exchange policy India has started integrating its economy with global economy. This has led to increased cross border flow of goods, services, funds and even intangibles."
    }
]

function About() {

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                    <Row>{
                        cardsData.map((item,i)=>(
                        <Col key={item.title} lg={4} md={6} sm={12} xs={12} key={i} className="mt-2">
                        <Card className="bg-dark text-white cardOver" style={{ width: '18rem',height:"250px" }}>
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
              <br/><br/>
            </Container>
    )
}

export default About
