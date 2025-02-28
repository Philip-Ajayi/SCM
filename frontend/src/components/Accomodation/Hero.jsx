import React from 'react';

const Hero = () => {
  return (
    <section className="relative z-0 pb-8 mt-32"> {/* Lowered z-index */}
      <div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-10">
        {/* Hero Left */}
        <div className="flex flex-col gap-12 text-black text-center md:text-left p-4 md:p-0">
          <div className="relative z-10">
            <div className="absolute right-28 top-[-2.5rem] h-16 w-16 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full"></div>
            <h1 className="font-semibold text-4xl md:text-6xl leading-tight">
              Complimentary <br />
              Stay & <br />
              Meals
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-gray-600">
            <span>Enjoy complimentary hotel accommodations and meals at select restaurants .</span>
            <span>Don’t miss out on the opportunity to stay close to the event and enjoy a comfortable experience</span>
          </div>
        </div>

        {/* Hero Right */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="overflow-hidden rounded-t-3xl rounded-b-lg border-8 border-gray-300">
            <img 
              src="https://www.arch2o.com/wp-content/uploads/2018/06/Arch2O-silver-lining-boutique-country-hotel-one-take-architects-24.jpg" 
              alt="houses" 
              className="w-full h-48 md:h-96 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
