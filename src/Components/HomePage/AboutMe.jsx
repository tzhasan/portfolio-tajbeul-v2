'use client'
import Image from 'next/image';
import image from '../../../public/images/Gray Simple Professional Twitter Profile Picture.png'
import Buttoncus from '../Utils/Buttoncus';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: false, delay: 0 }); 
  }, []);
  return (
    <div id="aboutme">
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center"
          bis_skin_checked={1}
        >
          <div
            data-aos="fade-right"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 flex md:justify-end justify-center"
            bis_skin_checked={1}
          >
            <Image
              className="object-cover object-center rounded"
              alt="Tajbeul-islam-image"
              src={image}
            />
          </div>
          <div
            data-aos="fade-left"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            bis_skin_checked={1}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              TAJBEUL ISLAM
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              As a React js web developer specializing in the MERN stack, I
              possess the skills and expertise to build impressive web
              applications using cutting-edge technologies. With proficiency in
              MongoDB, Express.js, React.js, and Node.js, I have mastered the
              art of full-stack development.
            </p>
            <Link
              href="/aboutme"
              className="flex justify-center"
              bis_skin_checked={1}
            >
              <Buttoncus>More</Buttoncus>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;