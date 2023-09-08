import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center '>
      <ClockLoader
        color="#ffffff"
        cssOverride={{}}
        size={65}
        speedMultiplier={2}
      />
    </div>
  );
};

export default Loading;