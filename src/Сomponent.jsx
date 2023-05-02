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
      <Swiper navigation={true} loop modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="block3"></div></SwiperSlide>
        <SwiperSlide><div className="block4"></div></SwiperSlide>
        <SwiperSlide><div className="block4"></div></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Compon;