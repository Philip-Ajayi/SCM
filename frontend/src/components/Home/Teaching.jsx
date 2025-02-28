import React from 'react';
import Teaching3 from '../../assets/Teaching3.jpg';
import { motion } from 'framer-motion';
import { FadeUp } from '../../../../../Camp/frontend/src/utility/animation';

const Teaching = () => {
  return (
    <section>
      <div className="bg-secondary/10 container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold uppercase"
            >
              The Word
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-justify"
            >
              The day sessions are dedicated to powerful teachings centered on Who You Are in Christ and the Finished Work of Jesus.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-justify"
            >
              You will gain a deeper understanding of your identity in Christ, the privileges and rights that come with redemption, and how to live out these truths daily.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Teaching3}
            alt="Banner" 
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Teaching;
