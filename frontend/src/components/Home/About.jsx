'use client'; 

import { motion } from 'framer-motion';

// Styles (in-place for Tailwind CSS)
const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  flexCenter: 'flex justify-center items-center',
};

// Framer Motion Utility Functions
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const textContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const textVariant2 = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } },
};

// TypingText Component
const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[24px] text-black ${textStyles}`} // Changed text color to black for readability
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

// Main About Component
const About = () => (
  <section className={`${styles.paddings} container relative z-10`}> {/* Removed mt-24 */}
    
    {/* Container for the animated text section */}
    <div className={`${styles.innerWidth} mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.flexCenter} flex-col relative z-10`}
      >
        <TypingText title="Supernatural Camp Meeting" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-8 font-normal sm:text-2xl text-lg text-center text-gray-800" // Adjusted text color for readability
        >
          Organized by Supernatural Community Church. Supernatural Community Church is a church ministry where we are devoted to raising and training ministers of the gospel who will reach the ends of the earth and light up every dark places. Our mission is to preach and teach the never-changing message of redemption in Christ to an ever-changing world. Thus, we are committed to equipping believers as we fellowship together with the word. We do this with much emphasis on the reality of the new creation in redemption with the intent that men are grounded and able to teach others the same. We are set out to light up every dark place on the earth as we preach and teach the gospel with the consciousness of definite signs and wonders.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default About;
