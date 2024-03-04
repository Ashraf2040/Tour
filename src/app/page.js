"use client";

import Image from "next/image";
import SubCard from "../components/SubCard";
import Swiper from "../components/Swiper";
import SwipeCarousol from "@/components/SwipeCarousol";
import SwiperCodePen from "@/components/SwiperCodePen";
import HeroSection from "@/components/HeroSection";
import SubCaresoul from "@/components/SubCaresoul/SubCaresoul";
import EmblaCarousel from "@/components/EmbalaCaresoul";
import "../components/css/base.css";
import "../components/css/sandbox.css";
import "../components/css/embla.css";
import { useState } from "react";
import SubCardsNew from "@/components/SubCardsNew";

export default function Home() {
  const [subCardsInView, setSubCardsInView] = useState(false);
  return (
    <div className="w-screen h-screen">
      <SwipeCarousol setSubCardsInView={setSubCardsInView} subCardsInView={subCardsInView} />
      <div className={`${!subCardsInView ? "hidden" : "block"}`}><SubCardsNew /></div>
    </div>
  );
}
