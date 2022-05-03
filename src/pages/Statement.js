import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../Styles/Statement.css'

const Statement = () => {
  return (
    <section id='statement'>
    <Navbar/>
   <div className='statement-hero'>
       <img src=" https://ucarecdn.com/3d06e2fa-be1a-4f84-9f85-d95be29868be/"/>
       <h2>Our Financial Statements</h2>
   </div>
   <h2 className='stat-head'>Company & Investements</h2>
   <p className='stat-sub'>Juice Galore</p>
   <div className='about-container'>
      
       
       <div data-aos="fade-up" className='div-5'>
           <div className='about-card-content'>
               <h3>Juice Galore</h3>
               <h3>Cashflows</h3>
               <a target='_blank' href='https://maroon-lily-16.tiiny.site/'>View</a>
           </div>
       </div>
     
       <div data-aos="fade-up" className='div-5'>
        
           <div className='about-card-content'>
              <h3>Underlying Assumptions</h3>
              <h3>for projects</h3>
              <a target='_blank' href='https://docdro.id/LgF8Oku'>View</a>
              
           </div>
       </div>
       <div data-aos="fade-up" className='div-5'>
        
           <div className='about-card-content'>
              <h3>Profits and Loans </h3>   
              <a target='_blank' href='https://docdro.id/ydA2Edc'>View</a>
           </div>
       </div>
       <div data-aos="fade-up" className='div-5'>
        
        <div className='about-card-content'>
           <h3>Revenue Projection </h3>   
           <a target='_blank' href='https://docdro.id/9AKHNYj'>View</a>
        </div>
    </div>
    <div data-aos="fade-up" className='div-5'>
        
        <div className='about-card-content'>
           <h3>Revenue Projection </h3>   
           <a target='_blank' href='https://docdro.id/9AKHNYj'>View</a>
        </div>
    </div>
   
      
       
   </div>
   <Footer/>
</section>
  )
}

export default Statement