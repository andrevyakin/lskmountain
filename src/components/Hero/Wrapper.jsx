import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div
      className='basis-1/2 flex justify-center items-center border border-light
                 sm:h-32 md:h-44 lg:h-60 xl:h-72 2xl:h-86 3xl:h-88 4xl:h-113 min-h-32'
    >
      {children}
    </div>
  );
};
export default Wrapper;
