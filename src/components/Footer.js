import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='logo'>
      <a><img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-juice-kitchen-icongeek26-outline-gradient-icongeek26.png"/>Galore</a>
      </div>
      <div className='links'>
        <a>Contact Us</a>
        <a href='/about'>About Us</a>
        <a href='/team'>Meet the Team</a>
      </div>
      <div className='socials'>
      <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
      <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
      <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
      </div>
    </footer>
  )
}

export default Footer