// import "../../components/css/embla.css"
// import "../../components/css/base.css"
// import "../../components/css/sandbox.css"
"use client";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { createContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Card from "../../components/Card";

import "../../components/swiperSlide.module.css";

const SubCards = [
  {
    title: "Al-Bait Al-Haram",
    src: "/1.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/2.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/3.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    title: "Al-Bait Al-Haram",
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
];

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSlidOne() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" bg-neutral-600   ">
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            height: "500px",
          }}
          loop={true}
          spaceBetween={10}
          // navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 "
        >
          {SubCards.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                src={item.src}
                head={item.head}
                title={item.title}
                parag={item.par}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {SubCards.map((item, index) => (
          <SwiperSlide key={index}>
            <Card src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
