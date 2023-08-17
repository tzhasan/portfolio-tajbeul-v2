import React from 'react';

const EducationSection = () => {
  return (
    <div>
      <h5 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
        EDUCATIONS
      </h5>
      <section className="mt-[20%] flex flex-col sm:flex-row md:gap-20 gap-4">
        <div className=" py-4 text-white flex flex-col items-center sm:flex-row">
          <div
            className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
            bis_skin_checked={1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              id="school"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19c-.6-.32-1.32-.32-1.92 0z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-lg sm:text-lg md:text-xl font-semibold mb-[5%]">
              Jagannath University
            </h5>
            <h4 className="text-sm md:text-md mb-[2%]">BSC IN Psychology</h4>
            <h3>Year of Graduation: 2021</h3>
          </div>
        </div>
        <div className=" py-4  text-white flex flex-col items-center sm:flex-row">
          <div
            className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
            bis_skin_checked={1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              id="school"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19c-.6-.32-1.32-.32-1.92 0z"></path>
            </svg>
          </div>
          <div>
            <h5 className="text-lg sm:text-lg md:text-xl font-semibold mb-[5%]">
              Programming Hero
            </h5>
            <h4 className="text-sm md:text-md mb-[2%]">
              Complete web <br /> development Course
            </h4>
            <h3>Batch: B-7 | Dec 2022</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSection;

