"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CircleHead = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false, mirror: false, delay: 0 }); 
  }, []);
  return (
    <div data-aos="zoom-in" className="flex justify-center relative">
      <div className="w-40 h-40   md:w-80 md:h-80 border flex justify-center items-center rounded-full">
        <div className="md:w-60 md:h-60   w-32 h-32 border rounded-full"></div>
      </div>
      <div className="absolute bottom-14 md:bottom-32 min-w-[150%]">
        <h5 className="text-center text-3xl  md:text-6xl  font-bold">
          {children}
        </h5>
      </div>
    </div>
  );
};

export default CircleHead;
