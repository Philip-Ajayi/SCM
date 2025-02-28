import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[160px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex justify-center items-center overflow-hidden z-0"> {/* Lower z-index */}
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0"> {/* Using full height for background */}
        <div className="absolute top-[40px] left-[20px] w-[192px] h-[192px] bg-pink-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[40px] right-[20px] w-[160px] h-[160px] bg-yellow-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-[54px] right-[40px] w-[128px] h-[128px] bg-blue-400 rounded-full opacity-40 animate-spin"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-black mb-2 mt-2">
          Minister's Bio
        </h1>
      </div>
    </div>
  );
};

export default Hero;
