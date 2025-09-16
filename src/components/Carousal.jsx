import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Carousal = () => {
  return (
    <div className="">
      <Swiper
      
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-w-[90dvw] h-[300px]"
      >
        <SwiperSlide><img src="https://picsum.photos/1600/300" alt="slide 1" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/1600/300" alt="slide 2" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/1600/300" alt="slide 3" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/1600/300" alt="slide 4" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/1600/300" alt="slide 5" /></SwiperSlide>
  
      </Swiper>
    </div>
  );
};

export default Carousal;
