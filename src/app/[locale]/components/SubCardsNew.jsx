
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
import { useLocale, useTranslations } from "next-intl";

export default function SubCardsNew({ typeIndex }) {
  

  
  const t = useTranslations("SubMain");
  return (
    <div className="h-full w-full flex flex-col   ">
      {mainItems[typeIndex].subCards.map((item, index) => (
        <CardItem
          key={index}
          imgSrc={item.imgSrc}
          subTitle={t(`item${index + 1}`)}
          routeUrl = {item.routeUrl}
        />
      ))}{" "}
    </div> // div
  );
}

const CardItem = ({ imgSrc, subTitle, routeUrl }) => {
  // const route = subTitle.replace(" ", "").toLowerCase();


  const locale = useLocale();
  const url = `/${locale}/${routeUrl}`;
  console.log(url)
  return (
    <Link href={url} className=" " >
      <Card className="  m-4 p-0 bg-neutral-700 rounded-lg shadow-sm shadow-white ">
        <CardHeader className="rounded-none">
          <Image src={imgSrc} alt="log" width={400} height={400} />
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
        subTitle: "About Al Kaaba",
        routeUrl : "kaaba1"
      },
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "Parts of Al Kaaba",
        routeUrl : "kaaba2"
      },
      {
        imgSrc: "/sub/kaaba2.jpg",
        subTitle: "About Al Kaaba",
        routeUrl : "kaaba3"
      },
      {
        imgSrc: "/sub/zam.jpg",
        subTitle: "Zam Zam",
        routeUrl :"zamzam"
        
      },
      {
        imgSrc: "/sub/ibrahim.jpg",
        subTitle: "Ibrahim",
        routeUrl :"ibrahim"
      },
      {
        imgSrc: "/sub/blackstone.jpg",
        subTitle: "The Black Stone",
        routeUrl :"blackstone"
      },
      {
        imgSrc: "/sub/corner.jpg",
        subTitle: "The Right Corner",
        routeUrl :"rightcorner"
      },
      {
        imgSrc: "/sub/ismail.jpg",
        subTitle: "Hijr Ismail",
        routeUrl :"hijrismaiel"
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
