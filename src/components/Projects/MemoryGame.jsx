import React, { useState } from "react";
import frontCard from "../../images/frontCard-memoryGame.png";
import { GiStack } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import MemoryGameSlider from "../Sliders/MemoryGameSlider";
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
        className="border rounded-lg  text-sm cursor-pointer h-[280px] flex flex-col justify-between"
      >
        <div className="h-44 rounded-t-lg">
          <img
            src={frontCard}
            alt="Memory GAME"
            className="w-[470px] h-[233px] rounded-t-lg"
          />
        </div>
        <div className="h-11 text-center flex items-center p-1 bg-gradient-to-r justify-center from-violet-700 to-fuchsia-500">
          <h1 className="text-white">Memory Game</h1>
        </div>
      </div>
      {isModalOpen && <ProjectDetails onClose={handleCloseModal} />}
    </>
  );
}

function ProjectDetails({ onClose }) {
  const ref = useOutsideClick(onClose);
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center p-8 md:p-[100px] overflow-x-scroll ">
      <div
        ref={ref}
        className="bg-white p-5 rounded-lg w-full xl:w-auto my-auto"
      >
        <h1 className="font-bold text-4xl mb-4">Memory Game</h1>
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
              <div className="border bg-cyan-600 items-center flex justify-center rounded-md w-[70px] h-[40px]">
                <p className="flex items-center gap-1 justify-center text-white ">
                  <span>
                    <FaCss3Alt />
                  </span>
                  Css
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
            <li className="mb-2">
              <span className="text-cyan-600">Interactive Gameplay:</span> The
              memory game challenges users to test their memory by flipping
              cards to find matching pairs, providing an engaging and
              entertaining experience.
            </li>
            <li className="mb-2">
              <span className="text-cyan-600">Custom Difficulty Levels:</span>{" "}
              Players can select from easy, medium, or hard difficulty levels,
              each determining the number of cards and adding a tailored
              challenge to suit their preferences.
            </li>
            <li className="mb-2">
              <span className="text-cyan-600">Responsive Design:</span> Fully
              responsive, ensuring smooth gameplay across devices, including
              phones, tablets, and desktops.
            </li>
            <li>
              <span className="text-cyan-600">Sound Effects:</span> Adds an
              immersive experience with audio feedback for card flips and other
              game interactions, enhancing user engagement.
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
        <div>
          <MemoryGameSlider />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <a
              href="https://memory-game-7cxwl1nb2-dardan100s-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-10 p-2 bg-cyan-600 text-white rounded">
                Demo
              </button>
            </a>

            <a
              href="https://github.com/dardan100/Memory-Game"
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
