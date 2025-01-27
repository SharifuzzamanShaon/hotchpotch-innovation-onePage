import React from 'react';

const Banner = () => {
  return (
<div className="bg-[#12141D] flex justify-center items-center py-4">
  <div className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-6 py-3 rounded-lg flex flex-col sm:flex-row justify-between items-center w-full max-w-[900px] h-auto sm:h-[147px]">
    <div className="text-white text-center sm:text-left">
      <h2 className="text-xl font-bold font-outfit">It will help you improve your writing</h2>
      <h3 className="text-xl font-bold font-outfit">and bring ideas more clearly.</h3>
    </div>
    <button className="bg-white text-black py-2 px-5 rounded-lg border-none cursor-pointer mt-4 sm:mt-0 font-inter">
      Start 14 Days Free Trial
    </button>
  </div>
</div>

  );
};

export default Banner;
