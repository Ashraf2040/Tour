import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronsDown } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import "./mainSwiper.module.css";

import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import MenuHum from "./MenuHum";

export default function MainSwiper({
  handleButtonClick,
  typeIndex,
  setTypeIndex,
}) {
 

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper h-full relative  "
      >
        {MainCards.map((item, index) => {
        
      
        return (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-4 absolute bottom-16 pt-4 pb-1 w-full  justify-center items-center bg-gradient-to-br from-white/50 to-white/20 text-red-900 ">
              <h1 className=" font-bold text-3xl">{item.title}</h1>
              <Link href="#target">
                <ChevronsDown
                  strokeWidth={4}
                  spacing={2}
                  className="text-red-900 animate-bounce h-10 "
                  onClick={() => handleButtonClick(index)}
                />
              </Link>
            </div>
          </SwiperSlide>
        )
          
         
        })}
      </Swiper>
      <div className="absolute w-full top-0 z-20">
        <MenuHum handleButtonClick={handleButtonClick} typeIndex={typeIndex} />
      </div>
    </>
  );
}

const MainCards = [
  {
    title: "Grand Mosque in Mecca",
    src: "1.jpg",
  },
  {
    title: "Makkah",
    src: "2.jpg",
  },
  {
    title: "Umrah",
    src: "5.png",
  },
  {
    title: "Fatwas",
    src: "4.png",
  },
];
