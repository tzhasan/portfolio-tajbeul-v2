import Image from 'next/image';
import image from '../../../public/images/Gray Simple Professional Twitter Profile Picture.png'
import Buttoncus from '../Utils/Buttoncus';
const AboutMe = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          bis_skin_checked={1}
        >
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            bis_skin_checked={1}
          >
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={image}
            />
          </div>
          <div
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
            <div className="flex justify-center" bis_skin_checked={1}>
              <Buttoncus>More</Buttoncus>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;