// import React from "react";
import pizzaMenu from "../../images/pizzaMenu.png";
import { GiStack } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

// export default function PizzaFastProject() {
//   return (
//     <div className="lg:grid-cols-2 grid-cols-1 grid gap-8 place-items-center ">
//       <div className="border rounded-lg w-[370px] text-sm ">
//         <div className="h-44 rounded-t-lg">
//           <img
//             src={pizzaMenu}
//             alt="pizza login"
//             className="w-[440px] h-[180px] rounded-t-lg"
//           />
//         </div>
//         <div className="h-11 text-center flex items-center p-1 bg-slate-200">
//           <h1>Order the best and the fastest pizzas at FastReactPizza</h1>
//         </div>
//       </div>

//       <div className="border rounded-lg w-[370px] text-sm ">
//         <div className="bg-slate-800 h-44 rounded-t-lg"></div>
//         <div className="h-11 text-center flex items-center p-1">
//           <h1>PizzaReact</h1>
//         </div>
//       </div>

//       <div className="border rounded-lg w-[370px] text-sm ">
//         <div className="bg-slate-800 h-44 rounded-t-lg"></div>
//         <div className="h-11 text-center flex items-center p-1">
//           <h1>PizzaReact</h1>
//         </div>
//       </div>

//       <div className="border rounded-lg w-[370px] text-sm ">
//         <div className="bg-slate-800 h-44 rounded-t-lg"></div>
//         <div className="h-11 text-center flex items-center p-1">
//           <h1>PizzaReact</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react"; // Assume Modal is a component you've created
import PizzaReactSlider from "../Sliders/PizzaReactSlider";
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
            src={pizzaMenu}
            alt="pizza login"
            className="w-[470px] h-[233px] rounded-t-lg"
          />
        </div>
        <div className="h-11 text-center flex items-center p-1 bg-yellow-400 flex-row">
          <h1>Order the best and the fastest pizzas at FastReactPizza</h1>
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
              <span className="text-cyan-600">Intuitive User Interface:</span> A
              clean and visually appealing design that allows users to navigate
              through the menu and place orders effortlessly.
            </li>
            <li className="mb-2">
              <span className="text-cyan-600">Customization Options:</span>{" "}
              Extensive customization for pizzas, including toppings, crust
              types, and sizes, ensuring every order is made to the user's exact
              preferences.
            </li>
            <li>
              <span className="text-cyan-600">Responsive Design:</span>{" "}
              Optimized for various devices, ensuring a consistent and enjoyable
              experience whether on a smartphone, tablet, or desktop.
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
          <PizzaReactSlider />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <a
              href="https://dardan100.github.io/FastReactPizza/"
              target="_blank"
            >
              <button
                onClick={onClose}
                className="mt-10 p-2 bg-cyan-600 text-white rounded"
              >
                Demo
              </button>
            </a>

            <a
              href="https://github.com/dardan100/FastReactPizza"
              target="_blank"
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
