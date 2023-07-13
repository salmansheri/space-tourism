'use client'; 

import { crews } from '@/constants/crew';
import Image from 'next/image';
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const CrewClient = () => {
    const [member, setMember] =  useState(0)
  return (
    <div className="w-full h-screen lg:flex items-center justify-center">
        {/* left  */}
        <div className="lg:flex-1 flex items-center justify-start  relative">
            {/* details  */}
            <div className="grid gap-3">
                <h2 className="sub-heading-1">{crews[member].designation}</h2>
                <h1 className="heading-3">{crews[member].name}</h1>
                <p>{crews[member].description}</p>
            </div>
            {/* dots  */}
            <div className="fixed top-60 flex flex-row items-center space-x-5 h-screen">
                <div onClick={() => setMember(0)} className={twMerge("h-3 w-3", member === 0 ? "bg-white": "bg-white/10", "rounded-full")}></div>
                <div onClick={() => setMember(1)} className={twMerge("h-3 w-3", member === 1 ? "bg-white": "bg-white/10", "rounded-full")}></div>
                <div onClick={() => setMember(2)} className={twMerge("h-3 w-3", member === 2 ? "bg-white": "bg-white/10", "rounded-full")}></div>
                <div onClick={() => setMember(3)} className={twMerge("h-3 w-3", member === 3 ? "bg-white": "bg-white/10", "rounded-full")}></div>
               
            </div>
        </div>
        {/* right  */}
        <div className="lg:flex-1 flex items-end justify-end">
            <Image 
                src={crews[member].src}
                alt={crews[member].name}
                width={400}
                height={300}
                className="object-cover mt-40"
               
            />
        </div>
    </div>
  )
}

export default CrewClient