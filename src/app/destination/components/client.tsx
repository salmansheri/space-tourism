'use client'; 

import React, { useState } from 'react'
import Heading from './heading'; 
import { planets } from '@/constants/planets';
import Image from 'next/image';

const DestinationClient = () => {
  const [planet, setPlanet] = useState(0); 
  return (
    <div className="w-full h-full flex">
      {/* left  */}
      <div className="flex-1 h-screen flex flex-col justify-center items-center space-y-10 mt-28">
        <h3 className="sub-heading-1">
          01 PICK YOUR DESTINATION
        </h3>
        <div>
          <Image
            src={planets[planet].src}
            alt={planets[planet].title}
            height={300}
            width={300}
            priority
            className='object-cover float-left'
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center h-screen">

        <Heading 
         
          planet={planet}
          setPlanet={setPlanet}
        />
        <div className=" flex flex-col">
          <div>
            <h1 className="heading-2">{planets[planet].title}</h1>
          </div>
          <div className="w-[60%]">
            <p>{planets[planet].description}</p>
          </div>
          <hr className="w-[60%] border-gray-500 mt-3" />
          <div className="mt-5">
            <div className="flex flex-row justify-between w-[50%]">    
              <span className="flex flex-col space-y-2">Avg distance
    <br />
              {planets[planet].avgDistance}
              </span>
              <span className="">
                Travel Time <br />

              {planets[planet].travelTime}
              </span>
            </div>
            
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default DestinationClient