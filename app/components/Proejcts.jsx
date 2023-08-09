"use client";
import React from "react";
import Image from "next/image";
import propertyImg from "../../public/assets/projects/property.jpg";

import Link from "next/link";
import ProjectItem from "./ProjectItem";
import CryptoImg from "../../public/assets/projects/crypto.jpg";
import NetFlixImg from "../../public/assets/projects/netflix.jpg";
import TwitchImg from "../../public/assets/projects/twitch.jpg";

const Proejcts = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="font-semibold text-2xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h1 className="py-4">What I've Built</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={CryptoImg}
            projectUrl="/property"
          />
         
          <ProjectItem
            title="Twtich App"
            backgroundImg={TwitchImg}
            projectUrl="/property"
          />

<ProjectItem
            title="NetFlix App"
            backgroundImg={NetFlixImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Proejcts;