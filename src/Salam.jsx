import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img3 from './img/шарф.webp'
import img4 from './img/туфли2.webp'
import img5 from './img/8.webp'
import img6     from './img/photo_2023-05-06_16-43-31.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./salam.css";

// import required modules
import { Navigation } from "swiper";

export default function Salam() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
      navigation={true}
      
      loop modules={[Navigation]}

        className="mySwiper2"
      >
   <SwiperSlide>
          <div
           className="img3"><img src={img3} alt="" />
         </div>
   </SwiperSlide>

   <SwiperSlide>
          <div
          className="img4"><img src={img4} alt="" />
          </div>
   </SwiperSlide>
   
   <SwiperSlide>
          <div
           className="img5"><img src={img5} alt="" />
          </div>
   </SwiperSlide>

   <SwiperSlide>         
          <div className="img6"><img src={img6} alt="" />
          </div>
   </SwiperSlide>

      </Swiper>
    </>
  );
}
