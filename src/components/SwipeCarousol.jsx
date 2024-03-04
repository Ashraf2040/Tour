import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronsDown } from "lucide-react";

const imgs = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};


const SwipeCarousel = ({setSubCardsInView,subCardsInView}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const handleChevronClick = () => {
    setSubCardsInView(!subCardsInView)
  }
  const dragX = useMotionValue(0);
  console.log(imgIndex);
  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className=" overflow-hidden flex justify-center w-screen ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex w-screen   cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} setImgIndex={setImgIndex} />
      
      </motion.div>
      <div className="z-20 absolute bottom-16 flex w-full items-center flex-col gap-16"><Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <button className="text-white text-2xl font-semibold"
      
      
      onClick={handleChevronClick}><ChevronsDown strokeWidth={3}  spacing={4}/></button>
      </div>  

    </div>
  );
};

const Images = ({ imgIndex, setImgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className=" w-full h-screen shrink-0   object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-5 w-5 rounded-full transition-colors ${
              idx === imgIndex ? "bg-black" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default SwipeCarousel;
