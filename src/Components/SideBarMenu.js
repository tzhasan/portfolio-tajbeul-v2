'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { HomeIcon } from "@heroicons/react/24/outline";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


const SideBarMenu = () => {
  useEffect(() => {
    AOS.init({ once: false, mirror: false, delay: 0 });
  }, []);
  const pathname = usePathname();
  return (
    <div className="hidden md:block">
      {pathname === "/" ? (
        <div className="grid grid-cols-1 gap-3 ">
          <Link
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            to="namesection"
            spy={false}
            smooth={true}
            offset={-400}
            duration={1000}
            className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500"
          >
            <HomeIcon />
          </Link>
          <Link
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1600"
            to="bestprojects"
            spy={false}
            smooth={true}
            offset={-200}
            duration={1000}
            className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500"
          >
            <SquaresPlusIcon />
          </Link>
          <Link
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="2200"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500"
          >
            <EnvelopeIcon />
          </Link>
        </div>
      ):''}
    </div>
  );
};

export default SideBarMenu;
