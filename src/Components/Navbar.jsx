'use client'
import Link from 'next/link';
import '../app/globals.css'
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {  } from "@heroicons/react/24/outline";


import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/Providers/AuthProvider';
import Image from 'next/image';


const Navbar = () => {
  const {menuIsOpen,setmenuIsOpen,user,loading,logOut} = useContext(AuthContext)
  const [showLogo, setShowLogo] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
console.log(user);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  const handleLogOut = () => {
    logOut()
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollDirection = window.scrollY > 100 ? "down" : "up";
      setShowLogo(scrollDirection === "up");
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
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
          className={`md:text-4xl sm:text-4xl text-2xl md:ml-20 font-bold transition-opacity duration-800 ease-in-out ${
            menuIsOpen || !showLogo ? "hidden" : "block "
          }`}
        >
          TZH
        </div>
        <div className="md:block hidden">
          <div className="flex gap-6 text-xl ">
            <Link href="/contact">
              <button>Contact</button>
            </Link>
            <Link href="/projects">
              <button>Demo</button>
            </Link>
          </div>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full z-10">
          {/* Content */}
          <div className="text-2xl sm:text-4xl md:text-6xl font-bold w-[60%] mx-auto  justify-center items-center translate-y-52 flex flex-col gap-6 ">
            <Link
              onClick={() => setmenuIsOpen(!menuIsOpen)}
              href="/"
              className="hover:text-sky-400 delay-0 duration-300"
            >
              Home
            </Link>
            <Link
              onClick={() => setmenuIsOpen(!menuIsOpen)}
              href="/projects"
              className="hover:text-sky-400 delay-0 duration-300"
            >
              Projects
            </Link>
            <Link
              onClick={() => setmenuIsOpen(!menuIsOpen)}
              href="/contact"
              className="hover:text-sky-400 delay-0 duration-300"
            >
              Contact
            </Link>
            {user ? (
              <p
                onClick={handleLogOut}
                className="hover:text-sky-400 delay-0 duration-300 cursor-pointer flex justify-center items-center gap-4"
              >
                Log out{" "}
                <span>
                  {" "}
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={user?.photoURL}
                  />
                </span>
              </p>
            ) : (
              <Link
                onClick={() => setmenuIsOpen(!menuIsOpen)}
                href="/login"
                className="hover:text-sky-400 delay-0 duration-300"
              >
                Log in
              </Link>
            )}
          </div>
          {/* Blurred overlay */}
          <div className="absolute inset-0 backdrop-filter backdrop-blur-sm  bg-opacity-10 -z-10"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
