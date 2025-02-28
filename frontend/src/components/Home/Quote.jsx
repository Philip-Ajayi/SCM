import React from "react";

const Quote = () => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <div className="bg-gradient-to-t from-secondary to-secondary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
          <p className="font-bold text-md md:text-3xl max-w-[800px] mx-auto leading-normal">
            "It appears as though special meetings are God’s intervention for men, meetings make men and there are meetings you shouldn’t miss"
          </p>
          <p className="mt-4 text-sm md:text-lg text-left">
            — Ayo Benson
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
