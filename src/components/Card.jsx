"use client";

import Image from "next/image";
import styles from "./card.module.css";

function CardItem({ src, head, parag, title }) {
  return (
    <div className="  bg-[url('/2.png')] mb-2 text-white  bg-cover min-h-96">
      <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center  gap-20">
        <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

        <div className="text-2xl font-bold">{head}</div>

        <div className="font-semibold">
          <p>{parag}</p>
          <p>{parag}</p>
          <p>{parag}</p>
          <p>{parag}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
