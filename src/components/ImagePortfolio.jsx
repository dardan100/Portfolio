import React from "react";
import img from "../images/imgPortfolio.jpg";

export default function imagePortfolio() {
  return (
    <div className="flex items-center justify-center sm:flex sm:justify-start">
      <img
        src={img}
        alt=""
        className="w-60 h-[235px] p-1 rounded-full border-cyan-400 border-4 my-10"
      />
    </div>
  );
}
