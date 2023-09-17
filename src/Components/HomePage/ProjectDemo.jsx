import projectImage1 from '../../../public/images/phonetic-project12.png'
import projectImage2 from '../../../public/images/legends-project11.png'
import Image from 'next/image';
import Buttoncus from '../Utils/Buttoncus';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const ProjectDemo = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false, mirror: false, delay: 0 });
  }, []);
  return (
    <div
      id="demoProject"
      className="flex flex-col gap-3 md:gap-6 md:flex-row w-[100vw] mx-auto justify-center md:pt-20"
    >
      <div data-aos="zoom-in" className="blackShadowOnImage">
        <Image alt="image" width={600} height={600} src={projectImage1} />
        <div className="text-overlay space-y-4">
          <p className="md:text-4xl text-xl font-bold ">PHONETIC</p>
          <p>
            "Online Platform for Learning Languages from All Over the World.
            Featuring an Attractive Admin Dashboard with Useful Features.
            Integrated Stripe Payment as a Core Project Feature."
          </p>
          <div>
            <a href="https://summer-camp-project-519c5.web.app/">
              <Buttoncus>Visit</Buttoncus>
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="blackShadowOnImage">
        <Image alt="image" width={600} height={600} src={projectImage2} />
        <div className="text-overlay space-y-4">
          <p className="md:text-4xl text-xl font-bold ">LEGENDS</p>
          <p>
            "Ecommerce Website Project: Users Can Choose Toys for Their
            Children, and Sellers Can Add Their Own Toys to Sell. All Items Are
            Categorized, and an Advanced Search Option Is Added."
          </p>
          <div>
            <a href="https://toy-marketplace-43615.web.app/">
              <Buttoncus>Visit</Buttoncus>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;