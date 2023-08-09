import React from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build Great Website
          </p>
          <h1 className="py-4 text-gray-700 font-semibold text-4xl">
            Hi , I'm <span className="text-[#f04747]">Amit</span>
          </h1>
          <h1 className="py-4 text-gray-700 font-semibold text-4xl">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front end developer specializing in building website. Created
            responsive front-end web applications that deliver optimal user
            experiences across various devices and screen sizes.I’m focused on
            building responsive front-end web applications integrating back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-5">
<div className="rounded-full shadow-lg shadow-gray-400 p-6 gap-4 cursor-pointer hover:scale-120 ">
  <FaLinkedin/>
</div>
<div className="rounded-full shadow-lg shadow-gray-400 p-6 gap-4 cursor-pointer hover:scale-120 ">
  <FaGithub/>
</div>

<div className="rounded-full shadow-lg shadow-gray-400 p-6 gap-4 cursor-pointer hover:scale-120 ">
  <AiOutlineMail/>
</div>
<div className="rounded-full shadow-lg shadow-gray-400 p-6 gap-4 cursor-pointer hover:scale-120 ">
  <AiFillInstagram/>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
