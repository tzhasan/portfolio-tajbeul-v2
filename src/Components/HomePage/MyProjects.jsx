import Image from "next/image";
import React from "react";
// import svg from '../../../public/otherResources/undraw_project_completed_re_jr7u.svg'
import svg from "../../../public/otherResources/undraw_maker_launch_re_rq81.svg";
import Buttoncus from "../Utils/Buttoncus";

const MyProjects = () => {
  return (
    <div
      id="bestprojects"
      className="flex flex-col-reverse items-center justify-center gap-10 md:gap-0  md:flex-row"
    >
      <div className="md:w-3/5 w-full  ">
        <div className="space-y-10 w-fit md:ml-[20%] text-center md:text-left ">
          {/* text */}
          <h4 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Best Projects
          </h4>
          <p className="w-4/5  mx-auto md:mx-0 leading-relaxed text-white">
            I look forward to sharing my projects with you and showcasing the
            passion and dedication I bring to every aspect of web development.
          </p>
          <div className="flex justify-center md:justify-start">
            <Buttoncus>My Works</Buttoncus>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 w-full flex justify-center md:justify-start">
        {/* image */}
        <Image src={svg} width={500} height={500} />
      </div>
    </div>
  );
};

export default MyProjects;
