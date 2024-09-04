import React from "react";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function LearningList() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl mt-6 font-semibold">📖 Learning/Wish List</h1>
      <div className="mt-2 flex gap-3">
        <div className="border bg-cyan-600 p-2 rounded-md max-w-32">
          <p className="flex items-center gap-1 justify-center text-white ">
            <span>
              <SiTypescript />
            </span>
            TypeScript
          </p>
        </div>
        <div className="border rounded-md bg-cyan-600 p-2 max-w-32">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <FaAngular />
            </span>
            Angular
          </p>
        </div>
        <div className="border bg-cyan-600 p-2 rounded-md max-w-32">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <RiNextjsFill />
            </span>
            NextJs
          </p>
        </div>
      </div>
    </div>
  );
}
