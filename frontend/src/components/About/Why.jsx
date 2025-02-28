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
const Why = () => (
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
        <TypingText title="Camp Meeting" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-8 font-normal sm:text-2xl text-lg text-center text-gray-800" // Adjusted text color for readability
        >
          Camp Meeting is a traditional term that originated in the 19th and 20th centuries, referring to "Tent Meetings" where believers gathered for extended times of worship and teaching. The Supernatural Camp Meeting follows this rich tradition, providing a space where Christians can gather for intense spiritual engagement, much like the powerful gatherings of the early church in the Book of Acts.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default Why;
