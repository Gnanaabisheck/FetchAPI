import React, { useEffect, useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import img from  '../src/images/img.png'

const Practice = () => {
    const[user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res=>setUser(res))

    },[])
  return (
    <div>
        <h2 className='ud'>
            Our User Details 
        </h2>
       <Container>
        <Row>
            {user.map((u)=>(
                <Col md={4} className='data'>
                <img src={img} alt="" id='img'/>
                <br />
                <label>Name : </label> {u.name} 
                <br />
                <label>Email :</label> {u.email}
                <br />
                <label>Phno :</label> {u.phone}
                <br />
                <label>Company :</label> {u.company.name} {u.company.catchPhrase} {u.company.bs}
                <br />
                <label>Address :</label> {u.address.street}{u.address.suite}{u.address.city}
                <br />
                <label> Latitude :</label> {u.address.geo.lat} 
                <br />
                <label>Longitude :</label> {u.address.geo.lng}
                </Col>
            ))}
        </Row>
       </Container>
    </div>
  )
}

export default Practice