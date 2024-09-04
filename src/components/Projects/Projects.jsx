import React from "react";
import PizzaFastProject from "./PizzaFastProject";
import WorldWiseProject from "./WorldWiseProject";
import FlixMovieProject from "./FlixMovieProject";
import ReactQuizProject from "./ReactQuizProject";

export default function Projects() {
  return (
    <>
      <h1 className="font-bold text-4xl mb-5">Projects</h1>
      <div className="mt-10 mb-10 grid gap-10  md:grid-cols-1 lg:grid-cols-2 grid-cols-1  items-center justify-center place-items-center lg:gap-5 lg:px-14">
        <PizzaFastProject />
        <WorldWiseProject />
        <ReactQuizProject />
        <FlixMovieProject />
      </div>
    </>
  );
}
