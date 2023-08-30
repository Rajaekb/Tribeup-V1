'use client';

import Post from "../components/Post";
import PostColor from "../components/PostColor";
import { motion } from "framer-motion";
import { slideIn, slideUp, staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from '../components';

const Insights = () => {

  return (

    <section id="Insights">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

      >
        <div className='flex items-center py-16 px-8'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20 '>
              <div className='border border-[#FDA500] m-1 rounded-lg' />
            </div>
          </motion.div>
          <motion.h1 variants={slideIn('left', 'tween', 0.2, 1)}>
            <TypingText title="Read Our Latest Posts" />
          </motion.h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-8 sm:mx-12 mx-5">

          <motion.div
            variants={textVariant(0.2)}
          >
            <Post />

          </motion.div>
          <motion.div
            variants={textVariant(0.5)}
          >

            <PostColor />
          </motion.div>
          <motion.div
            variants={textVariant(0.8)}
          >

            <Post />
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
};

export default Insights;
