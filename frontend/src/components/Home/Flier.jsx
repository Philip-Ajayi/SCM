import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Art from '../../assets/Flier1.jpeg';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../../../../../Camp/frontend/src/utility/animation';

const Flier = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center just">
          <img
            src={Art}
            alt="Banner" 
            className="w-[400px] md:max-w-[400px] h-full object-cover drop-shadow" 
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl lg:text-4xl font-bold uppercase"
            >
              Camp Meeting 2024
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify"
            >
              Join us for the 2024 Supernatural Camp Meeting at <strong>Rochester Airport Marriott 1890 W Ridge Rd, Rochester NY, 14615</strong>.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify"
            >
              From <strong>Wednesday, November 20th</strong> to <strong>Sunday, November 24th</strong>, experience Heaven on Earthly Places as we dive into the Word and the Spirit.
            </motion.p>
            <motion.p
              variants={FadeUp(1.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-justify"
            >
              <strong>Schedule:</strong>
              <br />
              <strong>Wednesday:</strong> 7:00 PM
              <br />
              <strong>Thursday - Saturday:</strong> 
              <br />
              Morning Session: 7:00 AM 
              <br />
              Afternoon Session: 1:30 PM 
              <br />
              Evening Session: 7:00 PM 
              <br />
              <strong>Sunday:</strong> 7:00 AM
            </motion.p>
            <motion.div
              variants={FadeUp(1.3)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex justify-center md:justify-start"
            >
              <Link to="/registration/#"> {/* Wrap button in Link */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold p-3 rounded-md flex items-center gap-2">Register</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flier;
