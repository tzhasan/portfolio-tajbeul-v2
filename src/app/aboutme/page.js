
'use client'
import Navbar from '@/Components/Navbar';
import SideBarMenu from '@/Components/SideBarMenu';
import NamePictureSection from '@/Components/AboutMeRoute/NamePictureSection';
import EducationSection from '@/Components/AboutMeRoute/EducationSection';
import Exprience from '@/Components/AboutMeRoute/Exprience';
import Skills from '@/Components/AboutMeRoute/Skills';
import { usePathname } from 'next/navigation';

const aboutMe = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-72 fixed">
        <SideBarMenu />
      </div>
      <div className="section-class">
        <NamePictureSection />
      </div>
      <div className="section-class">
        <EducationSection />
      </div>
      <div className="section-class -mt-[20%]">
        <Exprience />
      </div>
      <div className="section-class -mt-[10%]">
        <Skills />
      </div>
    </div>
  );
};

export default aboutMe;

