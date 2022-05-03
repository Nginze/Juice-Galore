import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../Styles/Hero.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>

      <Swiper 
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
       
       
      >
        <SwiperSlide>
          <div className="img-container1" style={{height: '85vh'}}>
            <img src="https://ucarecdn.com/aeb9fcf1-2e62-4294-a179-326156117ca8/"/>
            <div className="content">
              
              <h2 className="tagline">Juice Galore
              </h2>
              
              <p className="tag-sub">NURTURING PASSION. NOURISHING PURPOSE
              </p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container2" style={{height: '85vh'}}>
            <img src="https://ucarecdn.com/0f3bcd37-0272-4f23-9022-7d66b5034ac3/"/>
            <div className="content">
              <h2 className="tagline">ACHIEVE YOUR
                  BEST WEIGHT.
              </h2>
              <p className="tag-sub">
              The best health and fitness partners make you feel supported, every step of your journey. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
     
          <div className="img-container3" style={{height: '85vh'}}>
           <img src="https://ucarecdn.com/0a0c7e3b-962e-46a2-8cda-681c6bd839c5/"/>
            <div className="content">
              <h2 className="tagline">ACHIEVE YOUR
                  BEST WEIGHT.
              </h2>
              <p className="tag-sub">
              The best health and fitness partners make you feel supported, every step of your journey. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container4" style={{height: '85vh'}}>
          <img src="https://ucarecdn.com/b8106e76-6c6e-4f70-b973-0039b17cf6ed/"/>
            <div className="content">
              <h2 className="tagline">ACHIEVE YOUR
                  BEST WEIGHT.
              </h2>
              <p className="tag-sub">
              The best health and fitness partners make you feel supported, every step of your journey. 
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
