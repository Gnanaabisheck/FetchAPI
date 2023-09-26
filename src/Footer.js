import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <div>
        <Container className='ft' fluid>
         <Row>
            <Col md={4} className='ps-5'>
              <p>
              To Contact us 
              </p>
                
                <p>
                Email : AngelFinance@gmail.com
                </p>
              
                <p>Phno : 123456678999</p>
                
                <p>
                    Website : www.angelfinance.com
                </p>
              
              <br />
              
            </Col>
            <Col md={4}>
          <p>
          Carrers
          </p>
             
              <p>
              Currently we have no openings if came we will inform you</p>  
            </Col>
            <Col md={4}>
            <p>
            Newsletter
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident commodi eum accusamus consequatur quo quasi quibusdam ipsa et adipisci voluptatibus.
            </p>
               
          

            </Col>
         </Row>
        </Container>
    </div>
  )
}

export default Footer