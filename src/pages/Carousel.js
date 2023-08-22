import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import golf from "../assets/images/golf.jpg";
import cycling from "../assets/images/cycling.jpg";
import swimming from "../assets/images/swimming.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={cycling} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swimming} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={golf} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
