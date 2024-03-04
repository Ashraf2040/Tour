import React from 'react'
import styles from "./swiperCodepen.module.css"
export default function SwiperCodePen() {
  return (
    <div className={styles.swiperContainer}>
  
    <div className="swiper-wrapper">
       
        <div className={styles.swiperSlide}>Slide 1</div>
        <div className={styles.swiperSlide}>Slide 2</div>
        <div className={styles.swiperSlide}>Slide 3</div>
        ...
    </div>
   
    <div className="swiper-pagination"></div>
    
    
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
    
   
    {/* <div className="swiper-scrollbar"></div> */}
</div>
  )
}
