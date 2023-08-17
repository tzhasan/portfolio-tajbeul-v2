import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbBrandFirebase, TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const servicesList = [
  { name: "HTML", logo: <AiOutlineHtml5 /> },
  { name: "CSS", logo: <TbBrandCss3 /> },
  { name: "JavaScript", logo: <RiJavascriptLine /> },
  { name: "React", logo: <BiLogoReact /> },
  { name: "NextJs", logo: <TbBrandNextjs /> },
  { name: "Firebase", logo: <TbBrandFirebase /> },
  { name: "MongoDb", logo: <TbBrandMongodb /> },
  { name: "NodeJs", logo: <BiLogoNodejs /> },
  { name: "ExpressJs", logo: <SiExpress /> },
];
const AllServices = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 md:gap-10">
      {servicesList.map((service) => (
        <div className="border-y border-gray-500 hover:border-white py-6 md:py-12 px-4 text-center group relative">
          <h5 className="lg:text-6xl text-2xl md:text-3xl group-hover:scale-110 transition duration-300 ">
            {service.name}
          </h5>
          <p className="md:text-7xl lg:text-9xl text-6xl absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] opacity-20 group-hover:opacity-30">
            {service.logo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
