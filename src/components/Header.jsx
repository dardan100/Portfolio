import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header className="mx-auto">
        <h1 className="font-bold text-4xl">
          I am <span className=" text-cyan-600">Dardan Nuredini</span>, nice to
          meet you! 👋
        </h1>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-cyan-600 text-[22px]">nuredinidardan5@gmail.com</p>
          <p className="text-[22px]">📍 Prishtine, Kosovo</p>
        </div>
        <p className="text-2xl mt-4 font-semibold tracking-wider">
          Young in the field with a new found passion for web developing,
          specically <span className="text-cyan-600">Front End Developing</span>
          . With great attention to detail and eagerness to learn more and
          understand the latest tools. I strive to create big things, and aquire
          great skills and abilities to use in programming.
        </p>
      </header>
      <div className="mt-5 flex gap-4">
        <a
          href="https://www.linkedin.com/in/dardan-nuredini-23b656239/"
          target="_blank"
        >
          <span className="text-5xl text-cyan-600 hover:text-cyan-500 transition-colors">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://github.com/dardan100">
          <span className="text-5xl text-cyan-600 hover:text-cyan-500 transition-colors">
            <FaGithub />
          </span>
        </a>
      </div>
    </div>
  );
}
