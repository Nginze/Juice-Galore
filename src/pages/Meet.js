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
              <p className='major'> Business Administration  </p>
              <p>Ashesi University</p>
              <a id ='linkedin' href='https://www.linkedin.com/in/gordon-duku/'><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          </div>
          
      </div>
    
        
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src ='https://ucarecdn.com/b14b295d-3bfc-49e5-9285-c90ea11ccd2f/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Felicia Sika Baëta</p>
              <p className='major'> Business Administration </p>
              <p>Ashesi University</p>
              <a id ='linkedin' href='https://www.linkedin.com/in/felicia-sika-ba%C3%ABta-38a614205/'><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          </div>
      </div>
         
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src ='https://ucarecdn.com/75965d96-daa8-496b-9d74-bbd2454f61d2/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Abdallah Salia</p>
              <p className='major'> Business Administration </p>
              <p>Ashesi University</p>
              <a id ='linkedin' href='https://www.linkedin.com/in/abdallah-salia-61202b204/'><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          </div>
      </div>
         
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src='https://ucarecdn.com/7d3986c6-a29c-46f6-ae85-bae9c28cd136/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Abibatu Gariba</p>
              <p className='major'> Business Administration </p>
              <p>Ashesi University</p>
              <a id ='linkedin' ><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          </div>
      </div>
      <div id='profile' data-aos="fade-up" className='div-5'>
          <img src='https://ucarecdn.com/6e7197dc-744e-4a5b-9e40-95a38a41697e/' className='profile-img'/>
          <div className='about-card-content'>
              <p className='name'>Reginald Abrokwa</p>
              <p className='major'> Business Administration</p>
              <p>Ashesi University</p>
              <a id ='linkedin'><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
          </div>
      </div>
   </div>
    </section>
    <Footer/>
    </>
  )
}

export default Meet