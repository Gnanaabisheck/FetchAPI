import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const Carrer = () => {

  const[data,setData]=useState([])
  
  return (
    <div>
     <ul>
     {
        data.map((item)=>(
          <li>
            {item.title}
          </li>
        ))
        
      }
      {console.log(data.length)}
     </ul>

    
    </div>
  )
}

export default Carrer