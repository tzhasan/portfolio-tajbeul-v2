"use client"
import React, { useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "../Icons/FacebookIcon";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../Utils/ContactForm";


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false, delay: 0 });
  }, []);
  

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row md:gap-4 gap-10 items-center  w-full p-10"
    >

      <div data-aos="fade-right" className="md:w-1/2 w-full ">
        <div className="flex flex-col gap-4 md:ml-[30%]">
          <p className="flex gap-4 items-center">
            <PaperAirplaneIcon className="h-12 w-12 text-white  p-1 " />
            <span className="text-md sm:text-sm md:text-lg font-medium">
              sohantajbiul210@gmail.com
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <PhoneArrowDownLeftIcon className="h-12 w-12 text-white  p-1 " />
            <span className="text-md sm:text-sm md:text-lg font-medium">
              +971 588 66 7013
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <MapPinIcon className="h-12 w-12 text-white  p-1 " />
            <span className="text-md sm:text-sm md:text-lg font-medium">
              Abu Shagara, <br /> Sharjah, UAE
            </span>
          </p>
          <div className="mt-4 flex gap-2 md:gap-6">
            <Link href="https://www.facebook.com/tzhasansohan210">
              <FacebookIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/tajbeul-islam/">
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/tzhasan">
              <GithubIcon />
            </Link>
            <Link href="https://www.instagram.com/_iamtz_/">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="md:w-1/2 w-full ml-6 ">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
