import React from "react";
import HomePage from "../components/HomePage"
import PrefefinedQuestions from "../components/PrefefinedQuestions"
export default function Home() {
  return (
    <div className="  min-h-screen     ">
      <HomePage />
      <PrefefinedQuestions />
    </div>
  );
}