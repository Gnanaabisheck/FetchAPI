import React, { useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const About = () => {
   
    const data=[{
        dat :" One Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat esse facere temporibus placeat explicabo soluta sed earum, iure ipsa minima tempora rem velit, inventore eveniet praesentium sequi asperiores debitis!"
    },
    {
        dat :" Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat esse facere temporibus placeat explicabo soluta sed earum, iure ipsa minima tempora rem velit, inventore eveniet praesentium sequi asperiores debitis!"
    },
    {
        dat :" three Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat esse facere temporibus placeat explicabo soluta sed earum, iure ipsa minima tempora rem velit, inventore eveniet praesentium sequi asperiores debitis!"
    },
    {
        dat :" four Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat esse facere temporibus placeat explicabo soluta sed earum, iure ipsa minima tempora rem velit, inventore eveniet praesentium sequi asperiores debitis!"
    },
]

const[change,setChange]=useState(0)

const datlen=data.length

function cleft(){
    change===0 ? setChange(datlen-1 ): setChange((pre)=>pre-1)
}

function cright(){
    change===(datlen-1)?setChange(0):setChange((prev)=>prev+1)
}

  return (
    <div>
    
    <div>
        <div className="box">
            {data[change].dat}
        </div>
        <button onClick={cleft}> left </button>
        <button onClick={cright}> Right </button>
    </div>

   
   
    </div>
   
  )
}

export default About