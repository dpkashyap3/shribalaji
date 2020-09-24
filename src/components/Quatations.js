import React from 'react'
import {Container,Table} from "react-bootstrap"
import {motion} from "framer-motion"
import Data from "./Quatations.json"

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




function Quatations() {

    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>
                <Table striped bordered hover variant="dark" size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>As Per</th>
                  </tr>
                </thead>
                <tbody>
                {
                    Data.map(item=>(
                  <tr>
                    <td>{item.index}</td>
                    <td>{item.service}</td>
                    <td>{item.rate}</td>
                    <td>{item.duration}</td>
                  </tr>))
                }
                </tbody>
              </Table>
                </Container>
              </motion.div>
            </Container>
    )
}

export default Quatations
