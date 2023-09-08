"use client";
import Image from "next/image";
import resume from "../../../public/images/CV-and-Others-Google-Drive.png";
import Buttoncus from "../Utils/Buttoncus";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ResumeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false, mirror: false, delay: 0 });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in" className="cv-container blackShadowOnCV">
        <Image className="cv-image" src={resume} />
        <div className="CVtext-overlay flex flex-col md:flex-row gap-4">
          <a href="https://drive.google.com/file/d/1C4vQT4KbUVjk-EyKTpXC4BZPG2IDSbSM/view?usp=drive_link">
            <Buttoncus>Drive</Buttoncus>
          </a>
          <a
            href="../../../public/Resume_of_Tajbeul_MERN.pdf"
            download="Resume-of-Tajbul.pdf"
          >
            <Buttoncus>Download</Buttoncus>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
