import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../Styles/Meet.css'
const Meet = () => {
  return (
    <>
    <Navbar/>
    <section id='team'>
        <h2 className='meet-head'>Meet The Team</h2>
        <p className='meet-sub'>Juice Galore</p>
        <div className='about-container'>
      
       
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src='https://ucarecdn.com/fd58628a-94c6-42fa-8b7a-e76ba77a8bb4/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Gordon Duku</p>
              <p className='major'> Business Administration Major </p>
              <p>Ashesi University</p>
          </div>
      </div>
    
        
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src ='https://ucarecdn.com/b14b295d-3bfc-49e5-9285-c90ea11ccd2f/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Felicia Sika Baëta</p>
              <p className='major'> Business Administration Major </p>
              <p>Ashesi University</p>
          </div>
      </div>
         
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src ='https://ucarecdn.com/75965d96-daa8-496b-9d74-bbd2454f61d2/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Abdallah Salia</p>
              <p className='major'> Business Administration Major </p>
              <p>Ashesi University</p>
          </div>
      </div>
         
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src='https://ucarecdn.com/7d3986c6-a29c-46f6-ae85-bae9c28cd136/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Abibatu Gariba</p>
              <p className='major'> Business Administration Major </p>
              <p>Ashesi University</p>
          </div>
      </div>
   </div>
    </section>
    <Footer/>
    </>
  )
}

export default Meet