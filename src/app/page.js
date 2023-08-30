'use client'
import AboutMe from "@/Components/HomePage/AboutMe";
import AllServices from "@/Components/HomePage/AllServices";
import CircleHead from "@/Components/HomePage/CircleHead";
import Contact from "@/Components/HomePage/Contact";
import MyProjects from "@/Components/HomePage/MyProjects";
import NameSection from "@/Components/HomePage/NameSection";
import ProjectDemo from "@/Components/HomePage/ProjectDemo";
import ResumeSection from "@/Components/HomePage/ResumeSection";
import Navbar from "@/Components/Navbar";
import SideBarMenu from "@/Components/SideBarMenu";
import { AuthContext } from "@/Providers/AuthProvider";
import { useContext} from "react";
export default function Home() {
  const { menuIsOpen } = useContext(AuthContext)
   
  return (
    <div>
      <Navbar />
      <div className="mt-72 fixed pt-[7%]  z-30">
        <SideBarMenu />
      </div>
      <div
        className={`h-[75vh] w-full mx-auto pt-[10%] flex justify-center items-center ${
          menuIsOpen ? "opacity-30" : "opacity-100"
        }`}
      >
        <NameSection />
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <CircleHead>ABOUT ME</CircleHead>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <AboutMe></AboutMe>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <MyProjects />
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <CircleHead>SERVICES OFFERING</CircleHead>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <AllServices></AllServices>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <CircleHead>PROJECT DEMO</CircleHead>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <ProjectDemo></ProjectDemo>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <CircleHead>RESUME</CircleHead>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <ResumeSection></ResumeSection>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <CircleHead>CONTACT</CircleHead>
      </div>
      <div
        className={`section-class ${menuIsOpen ? "opacity-30" : "opacity-100"}`}
      >
        <Contact></Contact>
      </div>
    </div>
  );
}
