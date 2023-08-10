import React from "react";
import Image from 'next/image';
import AboutImg from '../../public/assets/about.jpg';
import Link from 'next/link'

const About = () => {
  return (
    <div  className="w-full md:h-screen flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4 font-semibold text-3xl">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a front Developer.I have recently completed my education and training in web technologies, such as HTML, CSS, JavaScript ,React , Redux , TailwindCSS and Next js and I am  eager to apply my knowledge and skills to real-world projects.
          </p>
          <p className="py-2 text-gray-600">
            Created responsive front-end web applications that deliver optimal user
            experiences across various devices and screen sizes.I’m focused on
            building responsive front-end web applications integrating back-end
            technologies
          </p>
          <Link href='/#projects'>
          <p className="py-2 underline text-gray-600 cursor-pointer">
            Check Out some of my Latest Projects.
          </p>
          </Link>
          
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} alt="/" className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default About;
