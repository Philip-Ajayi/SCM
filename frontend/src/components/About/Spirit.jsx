import React from 'react';
import WorshipImage from '../../assets/worship3.jpg'; // Updated image import
import { motion, useInView } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const Spirit = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 }); // Detect when the section is in view

  return (
    <section ref={ref} className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <img
            src={WorshipImage}
            alt="Banner" 
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Animate only if inView is true
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Empowered Living
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify" // Animate only if inView is true
            >
              Explore the supernatural gifts God has given you. The meeting will teach you how to recognize and operate in the gifts of the Spirit, empowering you to minister to others and experience God’s power in new ways.
            </motion.p>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify" // Animate only if inView is true
            >
              Discover the joy that comes from living a Spirit-filled life. The meeting will help you cultivate a heart full of joy, regardless of circumstances, and live in the continuous overflow of the Holy Ghost.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
