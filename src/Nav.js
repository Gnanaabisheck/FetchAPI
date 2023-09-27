import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Carrer from './Carrer'
import From from './From'

const Nav = () => {
  return (
    <div>

<Link to='/About'>About</Link>
    <Link to='/Carrer'>Car</Link>
    <Link to='/From'>Home</Link>


    <Routes>
        <Route path='From' element={<From/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="carrer" element={<Carrer/>}/>

    </Routes>
    </div>
  )
}

export default Nav