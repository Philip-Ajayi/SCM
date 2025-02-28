import React from 'react';
import Teaching1 from '../../assets/Teaching1.jpg'; // Updated image import
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const Teaching = () => {
  const ref = React.useRef(null);  // Reference for the section
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });  // Detect when the section is in view

  return (
    <section ref={ref}>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}  // Animate only if inView is true
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Spiritual Identity
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify"  // Animate only if inView is true
            >
              Discover who you truly are in Christ. The meeting will open your eyes to the spiritual realities of being a child of God, empowering you to live in victory and confidence.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify"  // Animate only if inView is true
            >
              Learn how to walk in the fullness of what Jesus has already accomplished for you. In the meeting, you will be equipped to claim the rights and privileges that are yours as a believer.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Teaching1} // Changed to Teaching1.jpg
            alt="Banner"
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Teaching;
