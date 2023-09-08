"use client";
import React, { useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Buttoncus from "@/Components/Utils/Buttoncus";
import FacebookIcon from "@/Components/Icons/FacebookIcon";
import LinkedInIcon from "@/Components/Icons/LinkedInIcon";
import GithubIcon from "@/Components/Icons/GithubIcon";
import InstagramIcon from "@/Components/Icons/InstagramIcon";
import Navbar from "@/Components/Navbar";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("hello");
    e.preventDefault();
    console.log(form.current.name.value);

    emailjs
      .sendForm(
        "service_qdg526o",
        "template_plka0ug",
        form.current,
        "riGtYH0NU2Gfd4gzJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center pt-[25%] md:pt-[10%]">Lets's work together</h4>
      </div>
      <div className="flex flex-col lg:flex-row md:gap-4 gap-10 items-center  w-full p-10">
        <div className="md:w-1/2 w-full ">
          <div className="flex flex-col gap-4 md:ml-[30%]">
            <span className="flex gap-4 items-center">
              <PaperAirplaneIcon className="h-12 w-12 text-white  p-1 " />
              <p className="text-sm sm:text-sm md:text-md lg:text-lg font-medium">
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
        <div className="md:w-1/2 w-full ml-6 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
                Your Name*
              </label>
              <input
                name="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Elon Musk"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
                Your email*
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white">
                Your message*
              </label>
              <input
                name="message"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message"
                required
              />
            </div>
            <button type="submit">
              <Buttoncus>Submit</Buttoncus>
            </button>
          </form>
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
