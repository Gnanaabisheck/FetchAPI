import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form} from 'react-bootstrap';

const Anchor = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [sh, setSh] = useState(false);

  const handleCl = () => setSh(false);
  const handleSh = () => setSh(true);

  return (
    <div>
    
    <Navbar expand="lg"  id='outer'>
      <Container fluid >
        <Navbar.Brand id='brand'> <i class="fa fa-handshake-o" aria-hidden="true"></i> Angel Finance </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fw-bolder fs-5 text-uppercase ">
          <Nav >
          <Nav.Link href="#" id='lnk'>Home</Nav.Link>
            <Nav.Link href="#" id='lnk' onClick={handleShow}>Login</Nav.Link>
            <Nav.Link href="#" id='lnk' onClick={handleSh}>Register</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         <div id='tit'><i class="fa fa-handshake-o" aria-hidden="true"></i>Login</div>
        </Modal.Header>
        <Modal.Body>
                  <Form.Group>
                    <Form.Label className='lbl'>
                        Name
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Name'>
                      
                    </Form.Control>
                    <Form.Label className='lbl'>
                        Email
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Email'>
                      
                    </Form.Control>
                    <Form.Label className='lbl'>
                        Password
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Password' type='Password'>
                    
                    </Form.Control>

                   <div className="button">
                    <button className='button'>
                            Login
                    </button>
                   </div>
                  </Form.Group>
        </Modal.Body>
      
      </Modal>

      {/* for register */}

     

      <Modal show={sh} onHide={handleCl}>
      <Modal.Header closeButton>
         <div id='tit'><i class="fa fa-handshake-o" aria-hidden="true"></i>Register</div>
        </Modal.Header>
        <Modal.Body>
                  <Form.Group>
                    <Form.Label className='lbl'>
                        Name
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Name'>
                      
                    </Form.Control>
                    <Form.Label className='lbl'>
                        Email
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Email'>
                      
                    </Form.Control>
                    <Form.Label className='lbl'>
                        Password
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Password' type='Password'>
                    
                    </Form.Control>

                    <Form.Label className='lbl'>
                        Confirm Password
                    </Form.Label>
                    <Form.Control className='ipt' placeholder='Enter Password' type='Password'>
                    
                    </Form.Control>

                   <div className="button">
                    <button className='button'>
                            Register
                    </button>
                   </div>
                  </Form.Group>
        </Modal.Body>
      
       
      </Modal>
    </>
 

  

 
    </div>
  )
}

export default Anchor