import React from 'react'
import {Carousel, Image} from "react-bootstrap"
import pic1 from "../images/Slider/1.jpg"
import pic2 from "../images/Slider/2.jpg"
import pic3 from "../images/Slider/3.jpg"
import pic4 from "../images/Slider/4.jpg"

function Gallery() {
    return (
        <Carousel className="w-100">
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />
  </Carousel.Item>

        
  <Carousel.Item>
  <Image
    className="d-block w-100"
    src={pic4}
    alt="Fourth slide"
    />
    </Carousel.Item>

    <Carousel.Item>
    <img
    className="d-block w-100"
    src={pic4}
    alt="Third slide"
  />
  
</Carousel.Item>

</Carousel>
    )
}

export default Gallery
