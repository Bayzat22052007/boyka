import React from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './img/slider-h3-bg-1.webp'
import img2 from './img/slider-h3-bg-2.webp'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";

function Compon() {
  return (
    <>
      <Swiper navigation={true} loop modules={[Navigation]} className="mySwiper1">
        <SwiperSlide>
          <div className="block4">
          <h1>Classic Leather Accessories </h1>
         <h1> Amazing For Men's</h1>
         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/> dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="block3">
        <h1>Spring Men's T-Shirt </h1>
        <h1>Amazing Men's</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/> dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
          </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Compon;