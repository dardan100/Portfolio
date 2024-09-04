// import React from "react";
import React, { useState } from "react";
import reactQuiz from "../../images/answerReactQuiz.png";
import { GiStack } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import ReactQuizSlider from "../Sliders/ReactQuizSlider";

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
            src={reactQuiz}
            alt="pizza login"
            className="w-[470px] h-[235px] rounded-t-lg"
          />
        </div>
        <div
          className="h-11 text-center flex items-center p-1 bg-slate-5
        00 bg-gray-600 text-white"
        >
          <h1>Train yourself and get better at React with this ReactQuiz</h1>
        </div>
      </div>

      {isModalOpen && <ProjectDetails onClose={handleCloseModal} />}
    </>
  );
}

function ProjectDetails({ onClose }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center p-8 md:p-[100px] overflow-x-scroll ">
      <div className="bg-white p-5 rounded-lg w-full my-auto">
        <h1 className="font-bold text-4xl mb-4">ReactQuiz</h1>
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
              <span className="text-cyan-600">Real-Time Feedback:</span> Users
              receive instant feedback on their answers, allowing them to learn
              as they go
            </li>
            <li className="mb-2">
              <span className="text-cyan-600">Score Tracking:</span> The
              application tracks the user's score throughout the quiz,
              displaying results at the end.
            </li>
            <li>
              <span className="text-cyan-600">Customizable Quizzes:</span>{" "}
              Admins can easily add or modify quiz questions, making it
              adaptable to different topics and audiences.
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
          <ReactQuizSlider />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <a href="https://flixx-app-amber.vercel.app/" target="_blank">
              <button
                onClick={onClose}
                className="mt-10 p-2 bg-cyan-600 text-white rounded"
              >
                Demo
              </button>
            </a>

            <a href="https://github.com/dardan100/MovieFlixx" target="_blank">
              <button
                onClick={onClose}
                className="mt-10 p-2 bg-cyan-600 text-white rounded"
              >
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
