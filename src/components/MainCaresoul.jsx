import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronsDown } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./mainSwiper.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function MainSwiper({ handleButtonClick }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full "
      >
        <SwiperSlide id="1" className='bg-[url("/1.png")]  bg-cover'>
          <div className="flex flex-col gap-4 absolute bottom-16 pt-4 pb-1 w-full  justify-center items-center bg-gradient-to-br from-white/20 to-white/0 text-white ">
            <h1 className=" font-bold text-3xl">Al-Bait Al-Haram</h1>
            <ChevronsDown
              strokeWidth={4}
              spacing={2}
              className="text-white animate-bounce h-10 "
              onClick={handleButtonClick}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/2.png")] bg-cover'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/3.png")] bg-cover'>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/4.png")] bg-cover'>
          Slide 4
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const MainCards = [
  {
    title: "Al-Bait Al-Haram",
    src: "/1.png",
  },
  {
    title: "Mecca Touring",
    src: "/2.png",
  },
  {
    title: "Al Omrah",
    src: "/3.png",
  },
  {
    title: "Al Fatwa",
    src: "/4.png",
  },
];
