'use client';
import React from 'react'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { Link } from 'react-scroll';

import { useTranslations } from 'next-intl';


const Hero = () => {

  const t = useTranslations('Index');


  return (

    <section id="hero">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='h-screen flex sm:flex-row flex-col justify-between gap-10 overflow-hidden mt-10 mx-10' id="home">
          <div className='flex-1 pt-24'>
            <div className='flex items-center'>
              <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
              >
                <div className='sm:mt-5 sm:w-60 w-20 '>
                  <div className='border border-[#d0ff05] m-1 rounded-lg' />
                </div>
              </motion.div>
              <motion.h1 variants={slideIn('left', 'tween', 0.2, 1)}>
                <TypingText title={t('n1athlete')} />
              </motion.h1>
            </div>

            <br />
            <motion.h2
              variants={textVariant(0.5)}
              className=' text-4xl sm:text-5xl  text-strock-white tracking-[.10em] font-extrabold uppercase sm:leading-normal leading-relaxed'>


              {t('turnidea')}</motion.h2>
            <br />

            <motion.div
              variants={textVariant(0.2)}
              className='flex  gap-5'>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]   opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9] m-1 '>
                    <button className=" bg-[#912CC9]   sm:p-4 p-2 font-bold tracking-[.10em] sm:tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                  </div>
                </div>
              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#912CC9]  opacity-75 hover:opacity-100'>
                  <div className='border border-[#912CC9]  m-1'>
                    <button className=" sm:p-4 p-2 font-bold  tracking-[.10em] sm:tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imafounder')}</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className=' rounded-lg flex-1 '>
            <div className='  flex justify-center items-center  rounded-lg   w-full h-[550px]'>
              <video className='rounded-lg  w-full md:h-[550px]  object-cover' muted autoPlay loop>
                <source
                  src="https://appilab.vercel.app/video/workingvideo.mp4" type="video/mp4" />

              </video>
            </div>



          </motion.div>


        </div>


      </motion.div>
    </section>
  )
};

export default Hero;
