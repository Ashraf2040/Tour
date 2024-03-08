"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.module.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

const SubCards = [
  {
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pers",
  },
  {
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    // src: "/3.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    // src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    // src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    // src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    src: "/4.png",
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
  {
    head: "lorem ipsum dolor sit amet consectetur.",
    par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
  },
];

export default function App() {
  function getLinkHref() {
    // Logic to determine the URL
    return "/#target";
    
  }
  return (
    <>
      <div className=" ">
        <img src="/2.png" alt="item" />
        <div className="justify-center flex py-4 px-4">
          <Link href={getLinkHref()}>
            <svg
              height="30"
              viewBox="0 0 16 16"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"
                fill="#246499"
              />
            </svg>
          </Link>
          <p className="w-full text-center text-3xl font-bold">Kaaba</p>
        </div>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {SubCards.map((item, index) => (
          <SwiperSlide key={index}>
            <Card head={item.head} title={item.title} parag={item.par} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// import "../../components/css/embla.css"
// import "../../components/css/base.css"
// import "../../components/css/sandbox.css"
// "//use client";
// import { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { createContext } from "react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import Card from "../../components/Card";

// import "../../components/swiperSlide.module.css";

// const SubCards = [
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/1.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/2.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/3.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
//   {
//     title: "Al-Bait Al-Haram",
//     src: "/4.png",
//     head: "lorem ipsum dolor sit amet consectetur.",
//     par: "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
//   },
// ];

// import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// export default function SwiperSlidOne() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className=" bg-neutral-600   ">
//       <div>
//         <Swiper
//           style={{
//             "--swiper-navigation-color": "#fff",
//             "--swiper-pagination-color": "#fff",
//             height: "500px",
//           }}
//           loop={true}
//           spaceBetween={10}
//           // navigation={true}
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="mySwiper2 "
//         >
//           {SubCards.map((item, index) => (
//             <SwiperSlide key={index}>
//               <Card
//                 src={item.src}
//                 head={item.head}
//                 title={item.title}
//                 parag={item.par}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {SubCards.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Card src={item.src} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
