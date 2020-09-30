import React from 'react'
import {Modal,Button,Form,Col} from "react-bootstrap"
import emailjs from "emailjs-com"

function ContactModal(props) {



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sba', 'template_py8xmm5', e.target, 'user_h1GlBI0cXMcqSbXlmSLg1')
      .then((result) => {
          
      }, (error) => {
          console.log(error.text);
      });
      alert("Your Query is submitted successfully");
      e.target.reset();
  }


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
         
        

        <Form onSubmit={sendEmail}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" name="name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Mail Address" name="email"/>
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control type="number" placeholder="Enter Your Contact Number" name="phone"/>
</Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Message</Form.Label>
  <Form.Control as="textarea" rows="3" name="message"/>
</Form.Group>

  <Button className="btnreadme" type="submit">
    Submit
  </Button>
</Form>

        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="danger" size="lg" className="btnreadme" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ContactModal
