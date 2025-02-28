import React from 'react';
import WorshipImage from '../../assets/worship3.jpg'; // Updated image import
import { motion, useInView } from 'framer-motion';
import { FadeLeft } from '../../../../../Camp/frontend/src/utility/animation';

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
              className="text-2xl lg:text-4xl font-bold uppercase"
            >
              Demonstrations of the Spirit
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify" // Animate only if inView is true
            >
              The evenings are filled with dynamic demonstrations of the Holy Spirit. This is where teaching meets experience as we witness the gifts of the Spirit—utterance, revelation, and power—being activated.
            </motion.p>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify" // Animate only if inView is true
            >
              The evening sessions will fill you with the joy of the Holy Ghost and leave you transformed.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
