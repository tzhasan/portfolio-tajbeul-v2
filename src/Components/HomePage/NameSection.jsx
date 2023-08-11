import React from 'react';

const NameSection = () => {
  return (
    <div>
      <h2 className="text-center text-6xl font-bold mb-4">TAJBEUL ISLAM</h2>
      {/* Large */}
      <div className="flex justify-center gap-8 transition duration-300 delay-500">
        <div className="flex flex-col justify-center group border-y cursor-pointer min-h-[100px] min-w-[300px] text-right ">
          <p className="text-2xl font-semibold">ABOUT ME</p>
          <p className="group-hover:block namesecparastyle">Read more who i am</p>
        </div>
        <div className="flex flex-col justify-center group border-y cursor-pointer min-h-[100px] min-w-[300px] ">
          <p className="text-2xl font-semibold">MY WORKS</p>
          <p className="group-hover:block namesecparastyle">Some of my best projects</p>
        </div>
      </div>
    </div>
  );
};

export default NameSection;