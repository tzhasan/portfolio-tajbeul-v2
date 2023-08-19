'use client'
import Link from 'next/link';
import '../app/globals.css'
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {  } from "@heroicons/react/24/outline";


import { useState } from 'react';


const Navbar = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  console.log(menuIsOpen);
  const openMenuBarIconHandle = () => {
    setmenuIsOpen(true)
  }
  return (
    <div className="bg-gray-500  ">
      <nav className="flex items-center justify-between  my-12  mx-auto fixed left-0 right-0 w-[95%] z-30">
        <div
          onClick={() => setmenuIsOpen(!menuIsOpen)}
          className="border border-gray-500 hover:border-white transition-all delay-100 "
        >
          {menuIsOpen ? (
            <XMarkIcon className="h-12 w-12 text-white p-1" />
          ) : (
            <Bars3BottomLeftIcon className="h-12 w-12 text-white p-1" />
          )}
        </div>
        <div
          className={`md:text-4xl sm:text-4xl text-2xl md:ml-20 font-bold ${
            menuIsOpen ? "hidden" : "block"
          }`}
        >
          TZH
        </div>
        <div className="flex gap-6 text-xl">
          <Link href="/contact">
            <button>Contact</button>
          </Link>
          <Link href="/projects">
            <button>Demo</button>
          </Link>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full z-10">
          {/* Content */}
          <div className="text-2xl sm:text-4xl md:text-6xl font-bold w-[60%] mx-auto  justify-center items-center translate-y-52 flex flex-col gap-6">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/projects" className="">
              Projects
            </Link>
            <Link href="/contact" className="">
              Contact
            </Link>
            <Link href="/" className="">
              Log in
            </Link>
          </div>
          {/* Blurred overlay */}
          <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-gray-500  bg-opacity-10 -z-10"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
