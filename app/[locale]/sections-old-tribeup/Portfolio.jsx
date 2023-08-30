'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from '../utils/motion';
import { PortfolioCard, TypingText } from "../components";
import { exploreWorlds } from "../constants";


const Portfolio = () => {

  const [active, setActive] = useState('world-2');

  return (

    <section className="mx-8" id="Portfolio">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

      >
        <div className='flex sm:mx-8 my-12 items-center'>
          <motion.div
            variants={slideIn('left', 'tween', 0.8, 1)}
            className="flex">
            <div className='mt-5 sm:w-60 w-20'>
              <div className='border border-[#FDA500] m-1 rounded-lg' />
            </div>

          </motion.div>
          <TypingText title="Portfolio" textStyles="text-center" />
        </div>

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world, index) => (
            <PortfolioCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
 
            />

          ))}

        </div>
      </motion.div>
    </section>
  )
}
  ;

export default Portfolio;
