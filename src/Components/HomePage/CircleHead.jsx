import React from 'react';

const CircleHead = ({children}) => {
  return (
    <div className="flex justify-center relative">
      <div className="w-80 h-80 border flex justify-center items-center rounded-full">
        <div className="w-60 h-60 border rounded-full"></div>
      </div>
      <div className="absolute bottom-32 min-w-[150%]">
        <h5 className="text-center text-6xl font-bold">{ children}</h5>
      </div>
    </div>
  );
};

export default CircleHead;