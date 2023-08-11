import Image from 'next/image';
import React from 'react';
// import svg from '../../../public/otherResources/undraw_project_completed_re_jr7u.svg'
import svg from '../../../public/otherResources/undraw_maker_launch_re_rq81.svg'
import Buttoncus from '../Utils/Buttoncus';

const MyProjects = () => {
  return (
    <div className="flex items-center">
      <div className="w-3/5">
        <div className="space-y-10 w-fit ml-[30%]">
          {/* text */}
          <h4 className="text-5xl font-bold">Best Projects</h4>
          <p className="w-4/5 text-xl">
            I look forward to sharing my projects with you and showcasing the
            passion and dedication I bring to every aspect of web development.
          </p>
          <Buttoncus>My Works</Buttoncus>
        </div>
      </div>
      <div className="w-2/5">
        {/* image */}
        <Image src={svg} width={500} height={500} />
      </div>
    </div>
  );
};

export default MyProjects;