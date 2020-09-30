import React from 'react'
import {Carousel, Image,Container,Row,Col} from "react-bootstrap"
import pic1 from "../images/donat/1.jpg"
import pic2 from "../images/donat/2.jpg"
import pic3 from "../images/donat/3.jpg"
import pic4 from "../images/donat/4.jpg"
import pic5 from "../images/donat/5.jpg"
import pic6 from "../images/donat/6.jpg"



const slider=[pic1,pic2,pic3,pic4,pic5,pic6,]



function NGO() {
    return (
    <Container style={{margin:0,padding:0}} fluid>
        <Carousel className="w-100">
            {
              slider.map(item=>(
              <Carousel.Item>
                <Image
                className="d-block w-100"
                src={item}
                alt="First slide"
                height="600px"
                
                />
          </Carousel.Item>
      ))
  }
  
</Carousel>
<Container>
  <Row>
    <Col style={{textShadow:"2px 2px 2px black"}} className="mx-auto text-center text-white">
        <p className="h1 ">Yes Bank</p>
        <p className="h2">Chawri Bazar Branch</p>
        <p className="h2">IFSC Code:YESB0000456</p>
        <p className="h2">Account Number:045663400000917</p>
    </Col>
  </Row>
</Container>
</Container>
    )
  
}


export default NGO
