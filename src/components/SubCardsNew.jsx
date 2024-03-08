import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function SubCardsNew({typeIndex}) {
  return (
    <div className="h-full w-full flex flex-col   ">
      {mainItems[typeIndex].subCards.map((item, index) => (
        <CardItem key={index} imgSrc={item.imgSrc} subTitle={item.subTitle} />
      ))}{" "}
    </div> // div
  );
}

const CardItem = ({ imgSrc, subTitle }) => {
  const route = subTitle.replace(" ", "").toLowerCase();
  return (
    <Link href={route} className=" ">
      <Card className="  m-4 p-0 bg-neutral-700 rounded-lg shadow-sm shadow-white ">
        <CardHeader className="rounded-none">
          <img src={imgSrc} />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="" className=" my-4 text-white  ">
            {subTitle}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};
const mainItems = [
  {
    
    id: 0,
    subCards: [
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "Al Kaaba",
      },
      {
        imgSrc: "/sub/zam.jpg",
        subTitle: "Zam Zam",
      },
      {
        imgSrc: "/sub/ibrahim.jpg",
        subTitle: "Ibrahim",
      },
      {
        imgSrc: "/sub/blackstone.jpg",
        subTitle: "The Black Stone",
      },
      {
        imgSrc: "/sub/corner.jpg",
        subTitle: "The Right Corner",
      },
      {
        imgSrc: "/sub/ismail.jpg",
        subTitle: "Hijr Ismail",
      },
    ],
  },
  {
    
    id: 1,
    subCards: [
      {
        imgSrc: "/m1.jpg",
        subTitle: "Mecca1",
      },
      {
        imgSrc: "/m2.jpg",
        subTitle: "mecca2",
      },
      {
        imgSrc: "/m3.jpg",
        subTitle: "mecca3",
      },
      {
        imgSrc: "/m4.jpg",
        subTitle: "mecca4",
      },
     
    ],
  },
  {
    
    id: 2,
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
  {
    
    id: 3,
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
