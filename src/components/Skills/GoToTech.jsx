import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

export default function GoToTech() {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl font-bold">Skills</h1>

      <h1 className="text-2xl mt-6 font-semibold">❤️ Go-to Tech</h1>
      <div className="mt-2 flex gap-3">
        <div className="border rounded-md bg-cyan-600 p-2 max-w-32 shadow-md hover:shadow-lg transition-shadow">
          <p className="flex items-center gap-2 justify-center text-white ">
            <span>
              <IoLogoJavascript />
            </span>
            JavaScript
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
          <p className="flex items-center gap-1 justify-center text-white ">
            <span>
              <FaReact />
            </span>
            React
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
