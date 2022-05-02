import React from 'react'
import '../Styles/Sec3.css'
const Section3 = () => {
  return (
    <section data-aos="fade-up" id = 'sec3'>
        <div className='video-container'>
           <video loop autoPlay muted>
                  <source src="https://player.vimeo.com/external/315983417.sd.mp4?s=e4decb5f7ffa2310a5875007e9c76a8c6aa47e63&profile_id=165"  type="video/mp4"/>

                 <source src="https://player.vimeo.com/external/315983417.sd.mp4?s=e4decb5f7ffa2310a5875007e9c76a8c6aa47e63&profile_id=165"  type="video/mp4"/>
           </video>
        </div>
        <div  className='sec3-content'>
            <span> ONLY AT JUICE GALORE</span>
            <h3>WHOLE FRUITS.
                
            </h3>
            <h3>ORGANIC VEGGIES.
            </h3>
            <h3> NO SYRUPS.
            </h3>
            <h3>
                NO COMPROMISES
            </h3>
            <p>
            Each smoothie on our menu has a specific purpose, carefully crafted to help you reach your goals. Next time you're at Smoothie King, watch us make your smoothie. You’ll see simple things you recognize… whole fruits, organic veggies, and our purposeful powders. You won’t see spoonfuls of added sugar in many blends or any artificial colors, flavors or preservatives.
            </p>
        </div>
    </section>
  )
}

export default Section3