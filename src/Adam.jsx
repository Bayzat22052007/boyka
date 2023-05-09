import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img7 from './img/sas.webp'
import img8 from './img/sas.webp'
import img9 from './img/sas.webp'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./adam.css";

// import required modules
import { Pagination } from "swiper";

export default function Adam() {
  return (
    <>
      <Swiper pagination={true} loop modules={[Pagination]} className="mySwiper3">
        <SwiperSlide><div > <img className="sas1" src={img7} alt="" /></div></SwiperSlide>
        <SwiperSlide><div > <img className="sas1" src={img8} alt="" /></div></SwiperSlide>
        <SwiperSlide><div > <img className="sas1" src={img9} alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  );
}