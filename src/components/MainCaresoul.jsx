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
import Link from "next/link";
import MenuHum from "./MenuHum";

export default function MainSwiper({ handleButtonClick }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full relative  "
      >
        <SwiperSlide id="1" className='bg-[url("/1.jpg")] object-cover bg-cover'>
          <div className="flex flex-col gap-4 absolute bottom-16 pt-4 pb-1 w-full  justify-center items-center bg-gradient-to-br from-white/20 to-white/0 text-white ">
            <h1 className=" font-bold text-3xl">Grand Mosque in Mecca</h1>
            <Link href="#target">
              <ChevronsDown
                strokeWidth={4}
                spacing={2}
                className="text-white animate-bounce h-10 "
                onClick={handleButtonClick}
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/1.png")] object-cover'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/3.png")] bg-cover'>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='bg-[url("/4.png")] bg-cover'>
          Slide 4
        </SwiperSlide>
      </Swiper>
      <div className="absolute w-full top-0 z-20">
        <MenuHum />
      </div>
    </>
  );
}

const MainCards = [
  {
    title: "Grand Mosque in Mecca",
    src: "/1.png",
  },
  {
    title: "Makkah",
    src: "/2.png",
  },
  {
    title: "Umrah",
    src: "/3.png",
  },
  {
    title: "Fatwas",
    src: "/4.png",
  },
];
