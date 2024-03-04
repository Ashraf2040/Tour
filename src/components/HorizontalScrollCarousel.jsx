"use client";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const HorizontalScrollCarousel = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const DRAG_Buffer = 50;

    const dragX = useMotionValue(0);
    const onDragStart = () => {
      setDragging(true);
    };
    const SPRING_OPTIONS = {
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    };
  
    const onDragEnd = () => {
      setDragging(false);
      const x = dragX.get();
      if (x <= -DRAG_Buffer && cardIndex < imgs.length - 1) {
        setCardIndex((prev) => prev + 1);
      } else if (x >= DRAG_Buffer && cardIndex > 0) {
        setImgIndex((prev) => prev - 1);
      }
    };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div  drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${cardIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex items-center w-full cursor-grab active:cursor-grabbing">
          {cards.map((card,cardIndex) => {
            return <Card card={card} cardIndex={cardIndex} key={card.id} SPRING_OPTIONS={SPRING_OPTIONS}/>;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card,SPRING_OPTIONS }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/1.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 1,
  },
  {
    url: "/2.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 2,
  },
  {
    url: "/3.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 3,
  },
  {
    url: "/4.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 4,
  },
  {
    url: "/5.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 5,
  },
  {
    url: "/6.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    id: 6,
  },
];
export default HorizontalScrollCarousel;
