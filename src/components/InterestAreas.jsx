import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function InterestAreas() {
  return (
    <>
      <h1 className="font-bold mt-20 text-4xl">Intereset Areas</h1>
      <div className="mt-10 mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center justify-center place-items-center ">
        <div className="w-[330px] sm:w-[300px] border border-white p-5 shadow-[1px_5px_20px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] hover:shadow-[5px_15px_60px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] justify-center flex flex-col max-h-[230px] min-h-[230px] transition-transform duration-300 transform hover:scale-105 rounded-sm md:w-[330px]">
          <div className="flex text-center items-center gap-2 mb-2">
            <span className="text-2xl text-white bg-cyan-600 w-10 h-10 items-center rounded-xl flex justify-center">
              <FaDesktop />
            </span>
            <h1 className="font-bold"> User Interface (UI) Design</h1>
          </div>

          <ul>
            <li>
              <span className="text-cyan-600">Design Systems</span>: Creating
              and maintaining consistent design systems for large projects.
            </li>
            <li>
              <span className="text-cyan-600"> Responsive Design:</span>{" "}
              Ensuring web applications work across different devices and screen
              sizes.
            </li>
          </ul>
        </div>
        <div className="w-[330px] sm:w-[300px] border-double border border-white p-5 shadow-[1px_5px_20px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] hover:shadow-[5px_15px_60px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] max-h-[230px] min-h-[230px]  transition-transform duration-300 transform hover:scale-105 md:w-[330px]">
          <div className="flex text-center items-center gap-2 mb-2">
            <span className="text-2xl text-white bg-cyan-600 h-10 w-10 items-center rounded-xl flex justify-center">
              <FaReact />
            </span>
            <h1 className="font-bold">JavaScript and Frameworks</h1>
          </div>

          <ul>
            <li>
              <span className="text-cyan-600">React JS</span>: Proficiency in
              one or more modern front-end frameworks.
            </li>
            <li>
              <span className="text-cyan-600"> State Management:</span>{" "}
              Understanding state management libraries like Redux, Vuex, or
              MobX.
            </li>
          </ul>
        </div>

        <div className="w-[330px] sm:w-[300px] border-double border border-white p-5 shadow-[1px_5px_20px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] hover:shadow-[5px_15px_60px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] max-h-[230px] transition-transform duration-300 transform hover:scale-105 rounded-md md:w-[330px]">
          <div className="flex text-center items-center gap-2 mb-2">
            <span className="text-2xl text-white bg-cyan-600 w-10 h-10 items-center rounded-xl flex justify-center">
              <FaChalkboardTeacher />
            </span>
            <h1 className="font-bold">Soft Skills</h1>
          </div>

          <div>
            <ul className="text-base/4 min-h-[230px] leading-4">
              <li>
                <span className="text-cyan-600">Communication</span>: Effective
                communication with team members and stakeholders.
              </li>
              <li>
                <span className="text-cyan-600"> Problem-Solving:</span> Ability
                to solve complex problems with elegant solutions.
              </li>
              <li>
                <span className="text-cyan-600"> Time Managment</span>{" "}
                Efficiently managing time and resources for project deadlines.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[330px] sm:w-[300px] border-double border border-white p-5 shadow-[1px_5px_20px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] hover:shadow-[5px_15px_60px_rgba(0,0,0,0.3),_-0px_-0px_0px_rgba(0,0,0,0.3)] max-h-[230px] transition-transform duration-300 transform hover:scale-105 md:w-[330px]">
          <div className="flex text-center items-center gap-2 mb-2">
            <span className="text-2xl text-white bg-cyan-600 w-10 h-10 items-center rounded-xl flex justify-center">
              <FaBookOpen />
            </span>
            <h1 className="font-bold">Continuous Learning</h1>
          </div>

          <ul className="text-bases leading-5">
            <li>
              <span className="text-cyan-600">Keeping Up with Trends</span>:
              Following industry trends, attending webinars, and participating
              in communities.
            </li>
            <li>
              <span className="text-cyan-600">
                Learning New Tools and Technologies:
              </span>
              Staying curious and experimenting with new tools, libraries, and
              methodologies.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
