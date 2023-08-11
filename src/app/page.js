import AllServices from "@/Components/HomePage/AllServices";
import CircleHead from "@/Components/HomePage/CircleHead";
import MyProjects from "@/Components/HomePage/MyProjects";
import NameSection from "@/Components/HomePage/NameSection";
import ProjectDemo from "@/Components/HomePage/ProjectDemo";
import Navbar from "@/Components/Navbar";
import SideBarMenu from "@/Components/SideBarMenu";

export default function Home() {
  return (
    <div>
      <div className="">
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
    </div>
  );
}
