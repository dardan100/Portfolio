import React from "react";
import { useState } from "react";
import ImagePortfolio from "./components/ImagePortfolio";
import InterestAreas from "./components/InterestAreas";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <div className="px-5 py-4 md:max-w-6xl mx-auto ">
      <Header />
      <InterestAreas />
      <Skills />
      <Projects />
    </div>
  );
}
