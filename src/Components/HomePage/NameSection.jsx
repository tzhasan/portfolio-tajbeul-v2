
"use client"
import { Link as ScrollLink } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const NameSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: false, delay: 0 });
  }, []);
  return (
    <div id="namesection">
      <h2
        data-aos="zoom-out-up"
        className="text-center md:text-6xl sm:text-4xl text-3xl font-bold mb-[10%] "
      >
        TAJBEUL ISLAM
      </h2>
      {/* Large */}
      <div className=" flex justify-center gap-8 transition duration-300 delay-500">
        <ScrollLink
          data-aos="fade-right"
          data-aos-delay="1000"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="flex flex-col justify-center group border-y cursor-pointer md:min-h-[100px] md:min-w-[300px] min-h-[90px] min-w-[200px] text-right "
        >
          <p className="md:text-2xl sm:text-xl text-lg font-semibold">
            ABOUT ME
          </p>
          <p className="group-hover:block namesecparastyle text-xs sm:text-sm md:text-md">
            Read more who i am
          </p>
        </ScrollLink>
        <Link
          data-aos="fade-left"
          data-aos-delay="1000"
          href="/projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="flex flex-col justify-center group border-y cursor-pointer md:min-h-[100px] md:min-w-[300px] min-h-[90px] min-w-[200px] "
        >
          <p className="md:text-2xl sm:text-xl text-lg font-semibold">
            MY WORKS
          </p>
          <p className="group-hover:block namesecparastyle text-xs sm:text-sm md:text-md">
            Some of my projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NameSection;