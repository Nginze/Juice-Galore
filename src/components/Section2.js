import React from 'react'
import '../Styles/Sec2.css'
const Section2 = () => {
  return (
    <section id='sec2'>
        <h2>HOW WE'RE DIFFERENT</h2>
        <p>Our best-tasting smoothies start with the best ingredients! We’re committed to creating taste bud-tempting, premium smoothies made just for you</p>
        <div className='sec2-container'>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/2ef022f7-1604-4d30-b0f2-05eb1a41e2dd/-/preview/500x500'/><h3>Energizing</h3></div>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/1863c766-a05b-40c0-b32e-88597d825c61/'/><h3>Organic ingredients</h3></div>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/3dbac2e6-c27e-4cb7-a131-a7b5d1937fa7/'/><h3>Whole fruits</h3></div>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/fda111b2-0c99-4d9c-bdfb-873eaacf18f0/'/><h3>Health</h3></div>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/f0a94aeb-6664-487b-8a37-2ffaa1d6ae61/'/><h3>Vitality</h3></div>
            <div data-aos="fade-up" className='card'><img src='https://ucarecdn.com/63aeacbf-9ff8-4ad6-a12e-ccb4ea31a5ec/'/><h3>Customer Service</h3></div>
        </div>

    </section>
  )
}

export default Section2