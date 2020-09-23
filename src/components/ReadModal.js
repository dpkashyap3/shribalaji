import React from 'react'
import {Modal,Button,Image,Row,Col} from "react-bootstrap"
import Nitesh from "../images/nitesh.png"
function ReadModal(props) {



    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b>Shri Balaji Associates</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Row>
          <Col lg={8} md={8} sm={8} xs={8}>
          <p>
          <b>Nitesh Verma</b> & Team is a team of distinguished accountant, corporate financial advisors and tax consultants in India. Our firm of accountants represents a coalition of specialized skills that is geared to offer sound financial solutions and advices. The organization is a congregation of professionally qualified and experienced persons who are committed to add value and optimize the benefits accruing to clients.
          </p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
          <Image className="img-fluid" src={Nitesh}/>
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="danger" size="lg" className="btnreadme" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ReadModal
