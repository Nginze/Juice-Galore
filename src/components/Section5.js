import React from 'react'
import '../Styles/Sec5.css'
const Section5 = () => {
  return (
    <section data-aos="zoom-in-up"id='sec5'>
        <form>
            <div className='form-container'>
            <h2>Have More Concerns ? </h2>
            <span>Shoot Us an Email</span>
            <input type ='email'placeholder='Email address'/>
            <textarea placeholder='Message(We appreciate your feedback)'/>
            <button>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default Section5