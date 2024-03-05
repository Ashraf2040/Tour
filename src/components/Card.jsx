import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";



export default function CardContent({src,head,title,parag}) {

  
  const bgImage = `url('${src}')`;
  console.log(bgImage)
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/1.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/30" />
      </CardHeader>
      <Typography
          variant="h2"
          color="white"
          className="my-6 w-full flex justify-center absolute top-0 font-bold leading-[1.5]"
        >
         {title}
        </Typography>
      <CardBody className="relative py-14 px-6 md:px-12">
       
        <Typography
          variant="h5"
          color="white"
          className="mb-6 font-medium leading-[2]"
        >
          {parag}
        </Typography>
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
         
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Al Bait Al-Haram
        </Typography>
       
      </CardBody>
    </Card>
  )
}
