"use client";

import Image from "next/image";
import React, { useState } from "react";
import { technologies } from "@/constants/technologies";
import { twMerge } from "tailwind-merge";

const TechClient = () => {
  const [tech, setTech] = useState(0);
  return (
    <div className="h-screen lg:flex flex-row mb-10">
        {/* left  */}
      <div className="pt-48 pl-10 sub-heading-1 pb-28 lg:flex-1 flex flex-col space-y-10">
        <h4>03 SPACE LAUNCH 103</h4>
        <div className="lg:flex flex-row">
            <div className="w-full flex flex-row lg:flex-col lg:space-y-5  justify-center items-center my-10 lg:my-0">
                <div onClick={() => setTech(0)} className={twMerge("border border-text-secondary h-[60px] w-[60px] rounded-full flex items-center justify-center sub-heading-1 cursor-pointer", tech === 0 ? "bg-white text-background": "bg-transparent")}>1</div>
                <div onClick={() => setTech(1)} className={twMerge("border border-text-secondary h-[60px] w-[60px] cursor-pointer rounded-full flex items-center justify-center sub-heading-1", tech === 1 ? "bg-white text-background": "bg-transparent")}>2</div>
                <div onClick={() => setTech(2)} className={twMerge("border border-text-secondary h-[60px] w-[60px] cursor-pointer rounded-full flex items-center justify-center sub-heading-1", tech === 2 ? "bg-white text-background": "bg-transparent")}>3</div>
            </div>
            <div className='text-center lg:text-start px-10 grid gap-3'>
                <h3 className="sub-heading-2">{technologies[tech].designation}</h3>
                <h1 className="sub-heading-1 text-text-secondary">{technologies[tech].name}</h1>
                <p className="sub-heading-2">{technologies[tech].description}</p>
            </div>
        </div>
      </div>
      <div className="w-full h-[400px] lg:h-screen lg:flex-1 pt-48 flex items-end justify-end">
        <div className="w-[70%] h-[400px] relative">
          <Image
            src={technologies[tech].src}
            alt={technologies[tech].name}
            fill
          />
        </div>
       
      </div>
    </div>
  );
};

export default TechClient;
