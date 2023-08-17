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
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-72 fixed">
        <SideBarMenu />
      </div>
      <div className="h-[75vh] w-full mx-auto flex justify-center items-center">
        <NameSection />
      </div>
      <div className="section-class">
        <CircleHead>ABOUT ME</CircleHead>
      </div>
      <div className="section-class">
        <AboutMe></AboutMe>
      </div>
      <div className="section-class ">
        <MyProjects />
      </div>
      <div className="section-class">
        <CircleHead>SERVICES OFFERING</CircleHead>
      </div>
      <div className="section-class">
        <AllServices></AllServices>
      </div>
      <div className="section-class">
        <CircleHead>PROJECT DEMO</CircleHead>
      </div>
      <div className="section-class">
        <ProjectDemo></ProjectDemo>
      </div>
      <div className="section-class">
        <CircleHead>RESUME</CircleHead>
      </div>
      <div className="section-class">
        <ResumeSection></ResumeSection>
      </div>
      <div className="section-class">
        <CircleHead>CONTACT</CircleHead>
      </div>
      <div className="section-class">
        <Contact></Contact>
      </div>
    </div>
  );
}
