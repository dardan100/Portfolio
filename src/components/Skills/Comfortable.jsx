import React from "react";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Comfortable() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl mt-6 font-semibold">🔥 Comfortable</h1>
      <div className="mt-2 flex gap-3">
        <div className="border bg-cyan-600 p-2 rounded-md max-w-32">
          <p className="flex items-center gap-1 justify-center text-white ">
            <span>
              <FaReact />
            </span>
            React
          </p>
        </div>
        <div className="border rounded-md bg-cyan-600 p-2 max-w-32">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <RiTailwindCssFill />
            </span>
            Tailwind
          </p>
        </div>

        <div className="border rounded-md bg-cyan-600 p-2 max-w-32">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <FaCss3Alt />
            </span>
            Css
          </p>
        </div>
        <div className="border bg-cyan-600 p-2 rounded-md max-w-32">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <FaHtml5 />
            </span>
            HTML
          </p>
        </div>
      </div>
    </div>
  );
}
