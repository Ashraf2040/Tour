import Image from "next/image";
import Link from "next/link";
import React from "react";

const mainItems = [
  {
    mainTitle: "Mecca ",
    subCards: [
      {
        imgSrc: "/1.png",
        subTitle: "Al Kaaba",
      },
      {
        imgSrc: "/2.png",
        subTitle: "Zam Zam",
      },
      {
        imgSrc: "/3.png",
        subTitle: "Ibrahim",
      },
      {
        imgSrc: "/4.png",
        subTitle: "The Black Stone",
      },
      {
        imgSrc: "/5.png",
        subTitle: "The Right Corner",
      },
      {
        imgSrc: "/6.png",
        subTitle: "The Holder",
      },
    ],
  },
];

export default function SubCardsNew() {
  return (
    <div className="h-60 w-full flex flex-col gap-6 ">
      {mainItems[0].subCards.map((item, index) => (
        <CardItem key={index} imgSrc={item.imgSrc} subTitle={item.subTitle} />
      ))}{" "}
    </div> // div
  );
}

const CardItem = ({ imgSrc, subTitle }) => {
  return (
    <div className="relative flex flex-col items-center gap-2 rounded-lg">
      <Link href={`/${subTitle.replace(/\s/g, "").toLowerCase()}`}>
        <Image alt="img" width={400} height={400} src={imgSrc} className="rounded-lg" />

        <p className="absolute bottom-0 flex justify-center  items-center bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase  backdrop-blur-lg">
          {subTitle}
        </p>
      </Link>
    </div>
  );
};
