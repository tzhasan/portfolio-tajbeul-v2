import Image from "next/image";
import image from "../../../public/images/sohan1.jpg";

const NamePictureSection = () => {
  return (
    <section className="text-white body-font">
      <div
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        bis_skin_checked={1}
      >
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          bis_skin_checked={1}
        >
          <h1 className="title-font sm:text-4xl md:text-6xl text-3xl mb-4 font-medium text-white">
            TAJBEUL ISLAM
          </h1>
          <p className="mb-8 md:text-2xl leading-relaxed">
            FRONTEND DEVELOPER
          </p>
          
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          bis_skin_checked={1}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default NamePictureSection;
