'use client'
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";


const SideBarMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block">
      {pathname === "/" && (
        <div className="flex flex-col gap-3 ">
          <Link
            to="namesection"
            spy={true}
            smooth={true}
            offset={-400}
            duration={1000}
            className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500"
          >
            <HomeIcon />
          </Link>
          <Link
            to="bestprojects"
            spy={true}
            smooth={true}
            offset={-300}
            duration={1000}
            className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500"
          >
            <SquaresPlusIcon />
          </Link>
          <Link
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
      )}
    </div>
  );
};

export default SideBarMenu;
