import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";



export default function CardContent({head,title,parag}) {

  
  
  return (
    <Card
      shadow={false}
      className="relative grid   w-full  items-start justify-center overflow-hidden text-center"
    >
     
      <CardBody className="relative py-14 px-6 md:px-12">
       
        <Typography
          variant="h5"
          color="black"
          className="mb-6 font-medium leading-[2]"
        >
          {parag}
        </Typography>
        <Typography
          variant="h5"
          color="black"
          className="mb-6 font-medium leading-[2]"
        >
          {parag}
        </Typography>
       
       
       
      </CardBody>
    </Card>
  )
}
