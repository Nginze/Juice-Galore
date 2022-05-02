import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className='nav-elements'>
        <div className='logo'>
        <span><img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-juice-kitchen-icongeek26-outline-colour-icongeek26.png"/>Galore</span>
        </div>
        <div className='nav-links'>
        <a href='/'>Home</a>
        <a href='/statement'>Statements</a>
        <a href='/about'>About Us</a>
        <a href='/team'>Team</a>
        </div>
       
        
      </div>
      
    </nav>
  )
}

export default Navbar