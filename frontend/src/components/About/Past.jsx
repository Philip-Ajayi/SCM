import React from 'react';
import Worship2 from '../../assets/Worship2.jpg'; // Updated image import
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const Past = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <img
            src={Worship2} // Changed to Worship2.jpg
            alt="Banner" 
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow" 
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Highlight
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Modeled after the Charis Camp meeting by Chris Segun Onayinka, our meetings are designed to foster deep spiritual growth and transformation. During our 2023 Camp Meeting, we witnessed countless testimonies of people receiving salvation, being filled with the Spirit, and experiencing extraordinary miracles—just like the early believers.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Beyond miracles, many attendees were empowered in the work of ministry and grew in their understanding of spiritual gifts making this gathering a life-changing experience for all.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Past;
