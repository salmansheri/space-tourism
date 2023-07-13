'use client'; 

import React, { Dispatch, SetStateAction, useState } from 'react'
import { planets } from '@/constants/planets'
import { PlanetType } from '@/types';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
   
    setPlanet: Dispatch<SetStateAction<number>>, 
    planet: number; 
}

const Heading: React.FC<HeadingProps> = ({
    planet, 
    setPlanet, 
}) => {
    
  return (
    <div className="flex flex-row space-x-5 mt-32">
        {planets.map((item: PlanetType, i) => (

        <div onClick={() => setPlanet(i)} className={twMerge("nav-text py-3 cursor-pointer", planet === i ? "border-b-2 border-text-primary text-white": "border-none")} key={item.title}>
            {item.title}
        </div>
        ))}
    </div>
  )
}

export default Heading