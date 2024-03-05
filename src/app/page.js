"use client";

import Image from "next/image";

import SwipeCarousol from "@/components/SwipeCarousol";

import { useState } from "react";
import SubCardsNew from "@/components/SubCardsNew";
import React, { createContext } from "react";
import MainCaresoul from "@/components/MainCaresoul";
export default function Home() {
  const [subCardsInView, setSubCardsInView] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <div className="w-screen h-screen">
      {/* <SwipeCarousol
        handleButtonClick={handleButtonClick}
        setShowDiv={setShowDiv}
      /> */}

      <MainCaresoul
        handleButtonClick={handleButtonClick}
        setShowDiv={setShowDiv}
      />
      {showDiv && (
        <div id="view" className=" p-0    bg-neutral-700">
          <SubCardsNew />
        </div>
      )}
    </div>
  );
}
