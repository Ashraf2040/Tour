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

export default function SubCardsNew() {
  return (
    <div className="h-full w-full flex flex-col   ">
      {mainItems[0].subCards.map((item, index) => (
        <CardItem key={index} imgSrc={item.imgSrc} subTitle={item.subTitle} />
      ))}{" "}
    </div> // div
  );
}

const CardItem = ({ imgSrc, subTitle }) => {
  const route = subTitle.replace(" ", "").toLowerCase();
  return (
    <Link href={route} className="  ">
    <Card className="  m-4 p-0 bg-neutral-700 rounded-lg shadow-lg shadow-white ">
      <CardHeader className="rounded-none">
        <img src={imgSrc} />
      </CardHeader>
      <CardBody className="text-center ">
        <Typography variant="h4" color="" className=" my-4 text-white ">
          {subTitle}
        </Typography>
      </CardBody>
    </Card>
    </Link>
  );
};
const mainItems = [
  {
    mainTitle: "Mecca ",
    id: 1,
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
