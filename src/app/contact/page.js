"use client";

import FacebookIcon from "@/Components/Icons/FacebookIcon";
import GithubIcon from "@/Components/Icons/GithubIcon";
import InstagramIcon from "@/Components/Icons/InstagramIcon";
import LinkedInIcon from "@/Components/Icons/LinkedInIcon";
import Navbar from "@/Components/Navbar";
import ContactForm from "@/Components/Utils/ContactForm";
import { MapPinIcon, PaperAirplaneIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false, delay: 0 });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center pt-[25%] md:pt-[10%]">
          Let's work together
        </h4>
      </div>
      <div
        id="contact"
        className="flex flex-col md:flex-row md:gap-4 gap-10 items-center  w-full p-10"
      >
        <div data-aos="fade-right" className="md:w-1/2 w-full ">
          <div className="flex flex-col gap-4 md:ml-[30%]">
            <span className="flex gap-4 items-center">
              <PaperAirplaneIcon className="h-12 w-12 text-white  p-1 " />
              <p className="text-md sm:text-sm md:text-lg font-medium">
                sohantajbiul210@gmail.com
              </p>
            </span>
            <span className="flex gap-4 items-center">
              <PhoneArrowDownLeftIcon className="h-12 w-12 text-white  p-1 " />
              <p className="text-md sm:text-sm md:text-lg font-medium">
                +971 588 66 7013
              </p>
            </span>
            <span className="flex gap-4 items-center">
              <MapPinIcon className="h-12 w-12 text-white  p-1 " />
              <p className="text-md sm:text-sm md:text-lg font-medium">
                Abu Shagara, <br /> Sharjah, UAE
              </p>
            </span>
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
          {/* form */}
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default Contact;

export const metadata = {
  title: "Contact",
  description: "Portfolio of Tajbeul islam | MERN stack web developer",
};
