"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmbalaCaresoulArrowButons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const subCards = [
    {
      title: "Al-Bait Al-Haram",
      src: "/2.png",
      header: "lorem ipsum dolor sit amet consectetur.",
      parag:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    },
    {
      title: "Al-Bait Al-Haram",
      src: "/2.png",
      header: "lorem ipsum dolor sit amet consectetur.",
      parag:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    },
    {
      title: "Al-Bait Al-Haram",
      src: "/4.png",
      header: "lorem ipsum dolor sit amet consectetur.",
      parag:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    },
    {
      title: "Al-Bait Al-Haram",
      src: "/1.png",
      header: "lorem ipsum dolor sit amet consectetur.",
      parag:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    },
    {
      title: "Al-Bait Al-Haram",
      src: "/3.png",
      header: "lorem ipsum dolor sit amet consectetur.",
      parag:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis nulla animi ea",
    },
  ];
  return (
    <section className="embla   h-full flex flex-col justify-center items-center py-20">
      <div className="embla__viewport  h-3/5 " ref={emblaRef}>
        <div className="embla__container h-[70%]">
          {subCards.map((item, index) => (
            <div
              className="
              "
              key={index}
            >
              <SubCard src={item.src} title={item.title} parag={item.parag} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls w-full pr-4">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

const SubCard = ({ src, title, parag }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={src} alt="Shoes" height={200} width={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{parag}</p>
      </div>
    </div>
  );
};
