"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SwipeCarousol from "@/components/SwipeCarousol";

import { useRef, useState, useEffect } from "react";
import SubCardsNew from "@/components/SubCardsNew";
import React, { createContext } from "react";
import MainCaresoul from "@/components/MainCaresoul";
import { Menu } from "lucide-react";
export default function Home() {
  const [subCardsInView, setSubCardsInView] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      // Delay scrolling slightly for smoother animation
      setTimeout(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [divRef]); // Run effect only when ref changes

  return (
    <div className=" relative w-screen h-screen">
     
      <MainCaresoul
        handleButtonClick={handleButtonClick}
        setShowDiv={setShowDiv}
      />
      {showDiv && (
        <div
          ref={divRef}
          id="target"
          className=" p-0 id   bg-neutral-700 overflow-y-scroll"
        >
          <SubCardsNew />
        </div>
      )}
    </div>
  );
}
