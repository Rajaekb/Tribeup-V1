'use client';
import React from 'react'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { Link } from 'react-scroll';
import Image from 'next/image';
import rugbyImg from '../../public/rugby.png'
import arrowYellow from '../../public/arrowyellow.png'
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
        <div className='h-screen flex sm:flex-row flex-col sm:justify-between overflow-hidden mx-8' id="home">
          <div className='flex-1 my-10 sm:my-32'>
            <div className='flex items-center'>
              <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex">
                <div className='sm:mt-5 sm:w-60 w-20 '>
                  <div className='border border-[#FDA500] m-1 rounded-lg' />
                </div>



              </motion.div>
              <motion.h1 variants={slideIn('left', 'tween', 0.2, 1)}>
                <TypingText title={t('n1athlete')} />
              </motion.h1>
            </div>

            <br />
            <motion.h2
              variants={textVariant(0.5)}
              className=' text-4xl sm:text-6xl text-gray-300 tracking-[.10em] font-bold uppercase sm:leading-normal leading-relaxed'>


              {t('buildtoconnect')}</motion.h2>
            <br />

            <motion.div
              variants={textVariant(0.2)}
              className='flex  gap-5'>
              <Link to="Brand" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#FDA500] opacity-75 hover:opacity-100'>
                  <div className='border border-[#FDA500] m-1'>
                    <button className=" sm:p-4 p-2 font-bold tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imabrand')}</button>
                  </div>
                </div>
              </Link>
              <Link to="Athlete" smooth={true} offset={-100} duration={500}>
                <div className='border-[3px] border-[#FDA500] opacity-75 hover:opacity-100'>
                  <div className='border border-[#FEBF03] m-1'>
                    <button className=" sm:p-4 p-2 font-bold tracking-[.25em]  hover:opacity-100 ease-in-out duration-300 hover:scale-110 text-white cursor-pointer" type="submit">{t('imanathlete')}</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}>
            <div className='sm:flex-1'>
              <Image
                src={rugbyImg}
                alt="rugbyimage"

                className="w-[800px] h-[800px] object-contain sm:-mt-20 sm:ml-20 -mt-52" />
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
    </section>
  )
};

export default Hero;
