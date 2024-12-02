// import React from "react";
import mountaubDashboard from "../../images/lightMountainAdventureDashboard.png";
import { GiStack } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { FaHtml5 } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

import React, { useState } from "react";
import MountainAdventureSlider from "../Sliders/MountainAdventureSlider";
import { useOutsideClick } from "../../hooks/useOutsideClick";
export default function PizzaFastProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="border rounded-lg text-sm cursor-pointer h-auto flex flex-col justify-between"
      >
        <div className="rounded-t-lg">
          <img
            src={mountaubDashboard}
            alt="pizza login"
            className="w-[470px] h-[235px] rounded-t-lg object-fit"
          />
        </div>
        <div className="h-11 text-center flex items-center p-1 bg-gray-300 flex-row">
          <h1>CabinEase: Simplify Your Cabin and Booking Operations</h1>
        </div>
      </div>

      {isModalOpen && <ProjectDetails onClose={handleCloseModal} />}
    </>
  );
}

function ProjectDetails({ onClose }) {
  const ref = useOutsideClick(onClose);
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-55 flex items-center justify-center p-8 md:p-[100px] overflow-x-scroll ">
      <div
        ref={ref}
        className="bg-gray-100 p-5 rounded-lg w-full xl:w-auto my-auto"
      >
        <h1 className="font-bold text-4xl mb-4">FastReactPizza</h1>
        <div className="">
          <p className="font-bold text-xl mb-2 flex items-center gap-1">
            <span>
              <GiStack />
            </span>
            Tech Stack
          </p>
          <div>
            <div className="flex gap-1">
              <div className="border bg-cyan-600 items-center flex justify-center rounded-md w-[70px] h-[40px]">
                <p className="flex items-center gap-1 justify-center text-sm text-white ">
                  <span>
                    <FaReact />
                  </span>
                  React
                </p>
              </div>

              <div className="border bg-cyan-600 items-center flex justify-center rounded-md px-2 w-auto h-[40px]">
                <p className="flex items-center gap-1 justify-center text-white ">
                  <span>
                    <RiTailwindCssFill />
                  </span>
                  TailwindCss
                </p>
              </div>
              <div className="border bg-cyan-600 items-center flex justify-center rounded-md w-[70px] h-[40px]">
                <p className="flex items-center  justify-center text-white ">
                  <span>
                    <FaHtml5 />
                  </span>
                  Html
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="flex items-center gap-2 font-bold text-lg mt-4">
          <span>
            <FaListCheck />
          </span>
          Description
        </p>
        <div>
          <ul className="mt-1">
            <li className="md:text-xl">
              <span className="text-cyan-600">Manage Cabins:</span> A Create and
              customize cabins, tailoring them to specific requirements.
            </li>
            <li className="md:text-xl">
              <span className="text-cyan-600">Handle Bookings:</span> Add,
              manage, and update bookings seamlessly for each cabin.
            </li>
            <li className="md:text-xl">
              <span className="text-cyan-600">
                Streamline Check-ins/Check-outs:
              </span>{" "}
              Efficiently check in and check out bookings for an organized
              experience.
            </li>
            <li className="md:text-xl">
              <span className="text-cyan-600">Account Management:</span> Create
              new accounts and update existing user profiles for a personalized
              experience.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="flex items-center gap-1.5 font-bold text-lg mt-10 mb-5">
            <span>
              <GrGallery />
            </span>
            Gallery
          </h1>
        </div>
        <div className="">
          <MountainAdventureSlider />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <a
              href="https://mountain-adventure-view.netlify.app/login"
              target="_blank"
              rel="noreferrer"
            >
              <button
                onClick={onClose}
                className="mt-10 p-2 bg-cyan-600 text-white rounded"
              >
                Demo
              </button>
            </a>

            <a
              href="https://github.com/dardan100/Mountain-Adventure"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-10 p-2 bg-cyan-600 text-white rounded">
                Code
              </button>
            </a>
          </div>
          <button
            onClick={onClose}
            className="mt-10 p-2 bg-cyan-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
