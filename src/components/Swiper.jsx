"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./swiper.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const [index, setIndex] = useState(0);

 
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const cardItems = ["Al Omrah", "Al Hajj", "Mecca", "Al Fatawa"];

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {cardItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className={` bg-[url('/${
              index + 1
            }.png')]  bg-cover`}
          >
            <h1
              className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg w-full flex gap-4  flex-col items-center
           justify-center absolute bottom-12"
            >
              {" "}
              {item}{" "}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </button>
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

{
  /* <SwiperSlide className={`${styles.swiperSlide} `}>
  <Image  alt='slide1' width={800} height={800} src="/1.png" className={styles.image}/>
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} `}><Image  alt='slide1' width={800} height={800} src="/2.png" className={styles.image}/></SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} `}><Image  alt='slide1' width={800} height={800} src="/3.png" className={styles.image}/></SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide} `}><Image  alt='slide1' width={800} height={800} src="/4.png" className={styles.image}/></SwiperSlide> */
}
