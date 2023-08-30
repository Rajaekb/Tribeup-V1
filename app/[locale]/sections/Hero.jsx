'use client';
import React from 'react'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { Link } from 'react-scroll';
import Image from 'next/image';
import arrowYellow from '../../public/arrowyellow.png'
import { useTranslations } from 'next-intl';


const Hero = () => {

  const t = useTranslations('Index');


  return (

    <section id="hero ">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="h-screen bg-hero flex justify-center items-center overflow-hidden px-8 " id="home">
          <div className=' w-[80%] my-10 sm:my-32  '>

            <br />
            <motion.h2
              variants={textVariant(0.5)}
              className='  font-mono text-4xl sm:text-5xl text-center uppercase  text-gray-300 tracking-[.05em] font-bold  sm:leading-normal leading-relaxed px-8 leading-normal	 '>


              {t('buildtoconnect')}</motion.h2>
            <br />

            <motion.div
              variants={textVariant(0.2)}
              className='flex justify-center  gap-5'>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-white opacity-75 hover:opacity-100 rounded-2xl'>
                  <div className='border border-white m-1 rounded-2xl'>
                    <button className=" sm:p-4 p-2 font-bold tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                  </div>
                </div>
              </Link>

            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}>
            <div className='sm:flex-1'>

              <Link to="About" smooth={true} offset={-100} duration={500}>
                <Image
                  src={arrowYellow}
                  alt="logo"
                  className="fixed right-0  -bottom-4  rotate-180 animate-bounce w-[150px] h-[150px] object-contain z-10 cursor-pointer " />

              </Link>


            </div>
          </motion.div>


        </div>


      </motion.div>
    </section >
  )
};

export default Hero;
