import React,{useState} from 'react'
import {Container,Table,Row,Form,Col} from "react-bootstrap"
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

  const [setup]=useState(Data)
  const [search,setsearch]=useState()
  const [data, setdata] = useState(setup)

  const searchdata=(e)=>{
      setsearch(e.target.value)
      setdata(Data.filter(item=>{
        if(search==null || search===""){
          return item
        }
        else if(item.service.toLowerCase().includes(search.toLowerCase())){
            return item
      } 
 
    }
      ))
      
}


    return (
        <Container>
                <br/>   
                <motion.div variants={pageload} initial="initial" animate="animate" className="heading">  
                <Container>

                <Row>
                  <Form className="text-white form-inline mb-3 text-center">
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail" >
                    <Form.Label >Enter Text To Search </Form.Label>
                    <Form.Control className="ml-3 w-auto" type="text" placeholder="Enter Keyword To Search" onChange={(e)=>searchdata(e)}/>
                  </Form.Group>
                  </Form.Row>
                  </Form>
                </Row>

                <Row>
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
                    data.map(item=>(
                  <tr key={item.index}>
                    <td>{item.index}</td>
                    <td>{item.service}</td>
                    <td>Rs.{item.rate}</td>
                    <td>{item.duration}</td>
                  </tr>))
                }
                </tbody>
              </Table>
              </Row>
                </Container>
              </motion.div>
            </Container>
    )
}

export default Quatations
