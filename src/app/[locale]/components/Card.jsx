import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useLocale, useMessages, useTranslations } from "next-intl";

export default function CardContent({ head, subHeader, parag, ul, id }) {
  const t = useTranslations("Kaaba1");

  const locale = useLocale();

  return (
    <Card
      shadow={false}
      className="relative grid   w-full  items-start justify-center overflow-hidden text-center"
    >
      <CardBody
        className="relative py-14 px-6 md:px-12 text-start"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Typography
          variant="h1"
          color="black"
          className="mb-6 font-extrabold text-[28px] flex justify-center  text-green-700 leading-[2] "
        >
          {head}
        </Typography>
        <Typography
          variant="h2"
          color="black"
          className="mb-6 font-extrabold  text-[20px]  leading-[2]"
        >
          {subHeader}
        </Typography>
        <Typography
          variant="h5"
          color="black"
          className="mb-3 font-bold  text-xl leading-[2]"
        >
          {parag}
        </Typography>
        <Typography
          variant="ul"
          color="black"
          className="mb-6 text-lg font-bold text-start leading-[2]"
        >
          {ul.map((item, index) => (
            <ul key={item} className="text-start">
              <li> -  {item}</li>
            </ul>
          ))}
        </Typography>
      </CardBody>
    </Card>
  );
}
