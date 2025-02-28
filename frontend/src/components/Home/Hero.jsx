import React from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Worship1 from '../../assets/Worship1.jpg'; 
import { motion, useInView } from 'framer-motion';
import { FadeRight } from '../../../../../Camp/frontend/src/utility/animation';

const Hero = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white relative" ref={ref}> {/* Set position relative */}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        
        {/* Text Section (First on mobile, second on desktop) */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 order-2 md:order-1"> {/* Adjusted z-index */}
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-5xl  lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia text-black">
              Supernatural
              <br />
              Camp <span className="text-secondary text-6xl font-bold">Meeting</span>
            </motion.h1>
            <motion.p 
              variants={FadeRight(0.9)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl tracking-wide text-black mb-4">
              Register now for Supernatural Camp Meeting 2024
            </motion.p>
            <motion.p 
              variants={FadeRight(1.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-gray-400 mb-6">
              Be part of an unforgettable experience. Encounter the word and the demonstrations of the Spirit. Catch the atmosphere in this meeting.
            </motion.p>
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex justify-center md:justify-start">
              <Link to="/registration"> {/* Wrap button in Link */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold p-3 rounded-md flex items-center gap-2">
                  Register
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image Section (First on mobile, second on desktop) */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <img 
            src={Worship1} 
            alt="Hero Image" 
            className="w-[300px] md:w-[450px] rounded-lg drop-shadow mt-24 md:mt-0" />
        </div>

      </div>

      {/* Add negative margin to pull the Hero section up and create overlap */}
      <div className="absolute top-0 left-0 w-full h-full z-0" style={{ marginTop: '-80px' }}>
        {/* This will allow the Hero section to pull up and overlap with the Header */}
      </div>
    </section>
  );
};

export default Hero;
