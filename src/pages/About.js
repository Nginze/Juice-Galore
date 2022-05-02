import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../Styles/About.css'
const About = () => {
  return (
     
    <section id='about'>
         <Navbar/>
        <div className='about-hero'>
            <h2>About Us</h2>
        </div>
        <div className='about-section'>
            <p>
            Juice Galore is a group of five Ashesi University business administration students with similar entrepreneurial ambitions. We offer 100% locally sourced fruit juices and smoothies that are good for both the body and the mind. Our fruits are picked fresh from the farms and processed in a sanitary environment. Our aim is not only to provide healthy fruit juices but also want to assist our farmers in improving their well-being by teaching them how to raise their yields.
            </p>
        </div>
        <div className='about-container'>
            <div data-aos="fade-up" className='div-1'>
                <img src='https://ucarecdn.com/4b378cd5-fa9c-48cc-bc88-8000e371be1e/'/>
                <div className='about-card-content'>
                    <span>New & Featured</span>
                    <p>
                    We’ve teamed up with America’s #1 Collagen Brand*, Vital Proteins®, to bring you three new smoothies available for a limited time only! Each smoothie is blended with 10g of Vital Proteins Collagen Peptides to help support healthy hair, skin, nails and joints.**
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className='div-2'>
            <video height = "500px"id='video-about' loop autoPlay muted>
                 <source src="https://vod-progressive.akamaized.net/exp=1651371100~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1335%2F14%2F356679802%2F1454893014.mp4~hmac=d798549296fd021943b285855829bed3163fb2ae00a6e5c398325db5d378bfc3/vimeo-prod-skyfire-std-us/01/1335/14/356679802/1454893014.mp4?filename=manifesto-looping-no-audio.mp4"  type="video/mp4"/>
           </video>
            </div>
            <div data-aos="fade-up" className='div-3'>
                <div className='about-card-content'>
                    <h3>Meet the</h3>
                    <h3>Management</h3>
                    <h3>Team</h3>
                    <a href='/team'>People</a>
                </div>
            </div>
            <div data-aos="fade-up" className='div-4'>
                <img src='https://ucarecdn.com/0e7e9155-f598-420d-826c-429b900bd0a4/'/>
                <div className='about-card-content'>
                    <span>Health Talk</span>
                    
                    <p>This humble fruit is extraordinarily rich in vitamin C, lycopene and antioxidants that are beneficial for skin. Guavas are also rich in manganese which helps the body to absorb other key nutrients from the food that we eat. Guavas benefits are credited due to the presence of folate, a mineral which helps promote fertility</p>
                </div>
            </div>
            <div data-aos="fade-up" className='div-5'>
                <img/>
                <div className='about-card-content'>
                   <h3>Explore all</h3>
                   <h3>Investements</h3>
                   <a href='/statement'>Company & Investments</a>
                </div>
            </div>
            <div data-aos="fade-up" className='div-6'>
                 <img src='https://ucarecdn.com/b69037bd-bd3c-41cf-a205-304cab6d0465/'/>
                <div className='about-card-content'>
                    <span>Health Talk</span>
                    
                    <p>There are a number of benefits from consuming smoothies, they increase fibre intake, contribute towards our 5 a day, boost our vitamin C levels and may help with conditions like high blood pressure</p>
                </div>
            </div>
            <div data-aos="fade-up" className='div-7'>
                <div className='logo-card'>
                     
                    <h3>Juice Galore</h3>
            
                </div>
                <div className='about-card-content'>
                    <span>Check Out Our Financial Statement</span>
                </div>
            </div>
            <div data-aos="fade-up" className='div-8'>
                <img src='https://ucarecdn.com/4c6f8d35-eaba-4d52-8864-6abef680c669/'/>
                <div className='about-card-content'>
                    <span>Health Talk</span>
                    
                    <p>Many studies have suggested that increasing consumption of plant foods such as blueberries decreases the risk of obesity, diabetes, heart disease, and overall mortality. Plant foods may also promote hair and skin health, increased energy, and overall lower weight.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default About