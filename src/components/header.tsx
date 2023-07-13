'use client'; 

import React from 'react'
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';


const Header = () => {
  const pathname = usePathname(); 

  const routes = [
    {
      label: "Home", 
      href: "/", 
      active: pathname === "/", 
    }, 
    {
      label: "Destination", 
      href: "/destination", 
      active: pathname === "/destination", 
    }, 
    {
      label: "Crew", 
      href: "/crew", 
      active: pathname === "/crew", 
    }, 
    {
      label: "Technology", 
      href: "/technology", 
      active: pathname === "/technology", 
    }, 
  ]
  return (
    <div className="nav-text text-text-secondary h-[100px]  flex flex-row  items-center justify-between absolute lg:top-10 w-full top-0 z-50 flex-shrink">
      <div className="mr-10 px-2 w-16 lg:px-10 flex items-center  relative z-50">
       <Image 
        src="/images/group.png"
        alt="logo"
        width={40}
        height={40}
        className="object-cover z-50 absolute"
       />
        {/* <h1 className="heading-4">Logo</h1>
         */}
      </div>
      <div className="flex-1 lg:flex items-center hidden relative">
        <hr className="border border-gray-700 w-full absolute -right-8 z-50" />
      </div>

      {/* links  */}
      <div
        className="lg:w-full h-full w-[50%]  lg:flex-1 items-center flex space-x-2 lg:space-x-10 lg:px-40  bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter bg-clip-padding"
      >
        {routes.map((route, i) => (
          <Link className={twMerge("h-full items-center flex space-x-3", route.active ? "border-b-2 border-solid": "border-none")} href={route.href} key={route.href}>
            <span className="hidden lg:block">0{i}</span>
            <span>{route.label}</span>

          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default Header