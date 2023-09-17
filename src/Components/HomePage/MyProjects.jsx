"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Buttoncus from "../Utils/Buttoncus";
import Link from "next/link";
import Lottie from "lottie-react";

import groovyWalkAnimation from "../../../public/otherResources/yvmTsQP4V9.json";
import { useEffect } from "react";


const MyProjects = () => {
   useEffect(() => {
     AOS.init({ duration: 800, once: false, mirror: false, delay: 0 });
   }, []);
  return (
    <div
      id="bestprojects"
      className="flex flex-col-reverse items-center justify-center gap-10 md:gap-0  md:flex-row"
    >
      <div data-aos="zoom-in" className="md:w-1/2 w-full  ">
        <div className="space-y-10 w-fit md:ml-[20%] text-center md:text-left ">
          {/* text */}
          <h4 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Best Projects
          </h4>
          <p className="w-4/5  mx-auto md:mx-0 leading-relaxed text-white">
            I look forward to sharing my projects with you and showcasing the
            passion and dedication I bring to every aspect of web development.
          </p>
          <Link
            href="/projects"
            className="flex justify-center md:justify-start"
          >
            <Buttoncus>My Works</Buttoncus>
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="md:w-1/2 w-full flex justify-center md:justify-start"
      >
        {/* image */}
        <div className="  mx-auto">
          <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
